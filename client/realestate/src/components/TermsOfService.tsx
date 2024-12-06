import { FC } from 'react';

const TermsOfService: FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Terms of Service
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
          <p className="mt-2 text-gray-600">
            Welcome to [Real Estate]! These terms and conditions govern your access to and use of our website and services. By using our site, you agree to comply with these terms. If you do not agree, please refrain from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Use of Our Services</h2>
          <p className="mt-2 text-gray-600">
            You agree to use our website and services for lawful purposes and in a manner that does not violate the rights of others or restrict their use and enjoyment of the services. You are prohibited from:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Engaging in any illegal activities or violating local laws.</li>
            <li>Uploading or distributing malicious content (e.g., viruses, malware).</li>
            <li>Harassing, threatening, or harming other users.</li>
            <li>Using the website for unauthorized commercial purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Intellectual Property</h2>
          <p className="mt-2 text-gray-600">
            The content, design, graphics, and logos on our website are the property of [Your Company Name]. You may not use, copy, modify, or distribute any content without our prior written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Account Responsibilities</h2>
          <p className="mt-2 text-gray-600">
            If you create an account with us, you are responsible for maintaining the confidentiality of your login information and any activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Limitation of Liability</h2>
          <p className="mt-2 text-gray-600">
            [Your Company Name] will not be held responsible for any damages arising from the use of our website, including direct, indirect, incidental, or consequential damages. This includes, but is not limited to, loss of data or loss of profits.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Privacy Policy</h2>
          <p className="mt-2 text-gray-600">
            Your use of our website is also governed by our <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Governing Law</h2>
          <p className="mt-2 text-gray-600">
            These Terms of Service are governed by the laws of [Your Country/State]. Any disputes related to these terms will be handled in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Modifications to the Terms</h2>
          <p className="mt-2 text-gray-600">
            We reserve the right to modify or update these Terms of Service at any time. Any changes will be posted on this page, and the "Last Updated" date will be revised. Your continued use of the services after changes are posted indicates your acceptance of those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2 text-gray-600">
            Email: <a href="mailto:support@yourcompany.com" className="text-blue-500">support@realestate.com</a>
          </p>
          <p className="mt-2 text-gray-600">
            Phone: (123) 456-7890
          </p>
          <p className="mt-2 text-gray-600">
            Address: 123 Real Estate Blvd, City, State, ZIP
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
