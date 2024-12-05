import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'
import mysql from "mysql2"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}))

app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)

const connection = mysql.createConnection({
    host: 'localhost',     // MySQL server host
    user: 'root',          // MySQL username
    password: 'my-secret-pw',  // MySQL password
    port: 3306
})

connection.query('USE realEstate_db', (err) => {
    if (err) {
      console.error('Error selecting database:', err.stack);
      return;
    }
    console.log('Using database realEstate_db');
  });

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack)
      return
    }
    console.log('Connected to MySQL as ID ' + connection.threadId)
})

const JWT_SECRET = process.env.JWT_SECRET_KEY

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] // Extract token from Authorization header
  
    if (!token) {
      return res.status(403).json({ message: 'No token provided' })
    }
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' })
      }
  
      req.user = decoded; // Attach user info to request object
      next() // Proceed to next middleware or route handler
    })
};

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }
  
    try {
      // Check if the user already exists
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
          if (err) {
          console.error(err)
          return res.status(500).json({ message: 'Database error' })
          }
  
          if (results.length > 0) {
          return res.status(400).json({ message: 'User already exists' })
          }
  
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10)
  
          // Insert the user into the database
          const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
          connection.query(query, [name, email, hashedPassword], (err, result) => {
              if (err) {
                  console.error(err);
                  return res.status(500).json({ message: 'Database error' });
              }
      
              // Optionally, create a JWT token after successful registration
              const token = jwt.sign({ id: result.insertId, email }, JWT_SECRET, {
                  expiresIn: '1h',
              });
      
              res.status(201).json({
                message: 'User registered successfully',
                token, // Send token in the response (optional)
              })
          })
        })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
})

// Authenticate user on login end point, generates JWT Token if there is no token exists
app.post('/login', (req, res) => {
    const { email, password } = req.body
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' })
    }
  
    // Query the database to find the user by email
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' })
        }
    
        if (results.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }
    
        const user = results[0] // Assuming email is unique
    
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Error comparing passwords' })
            }
    
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' })
            }
    
            // Generate a new JWT token for the authenticated user
            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
            res.json({ message: 'Login successful', token })
        })
    })
})
  
  // Example of a protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'You are authorized!', user: req.user })
});

app.listen(8800, () => {
    console.log(`Server is running`)
})
