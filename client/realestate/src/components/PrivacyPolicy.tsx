// src/PrivacyPolicy.tsx
import { FC } from 'react';

const PrivacyPolicy: FC = () => {
  return  (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Introduction</h2>
          <p className="mt-2 text-gray-600">
            At [Real Estate], we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Information We Collect</h2>
          <p className="mt-2 text-gray-600">
            We collect information in the following ways:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li><strong>Personal Information:</strong> Name, email, phone number, and any other details you provide when contacting us or signing up.</li>
            <li><strong>Usage Data:</strong> Information about how you use our site (IP address, browser type, pages visited, etc.).</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your user experience. You can manage your cookie settings in your browser.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">How We Use Your Information</h2>
          <p className="mt-2 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Provide you with real estate listings, updates, and related services.</li>
            <li>Respond to your inquiries and improve your experience on our site.</li>
            <li>Send you promotional materials if you've opted in.</li>
            <li>Analyze site performance and user behavior to enhance our website.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">How We Share Your Information</h2>
          <p className="mt-2 text-gray-600">
            We do not sell your personal data. However, we may share it in the following cases:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>With service providers (e.g., hosting, email services) who help us operate our website.</li>
            <li>If required by law (e.g., legal obligations, disputes).</li>
            <li>With your consent, for marketing purposes or business partnerships.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Your Rights</h2>
          <p className="mt-2 text-gray-600">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
            <li><strong>Correction:</strong> You can update or correct any inaccuracies in your data.</li>
            <li><strong>Deletion:</strong> You can request to delete your personal data in certain situations.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications at any time.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Security of Your Information</h2>
          <p className="mt-2 text-gray-600">
            We take reasonable precautions to protect your personal information, but no data transmission method or storage system is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Changes to This Policy</h2>
          <p className="mt-2 text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted here, and the "Last Updated" date will be revised.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy
