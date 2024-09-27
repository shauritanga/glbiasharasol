const FeatureSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Easy to use</h3>
              <p className="text-gray-600">
                Our intuitive drag-and-drop editor makes it easy for you to
                create your forms.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Customize your forms</h3>
              <p className="text-gray-600">
                Useform makes it easy to customize your forms to fit your
                company or client branding.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Save time & money</h3>
              <p className="text-gray-600">
                Stop spending time & money on the back-end development, focus on
                what matters.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">High Delivery</h3>
              <p className="text-gray-600">
                Thanks to our scalable infrastructure, we guarantee high
                deliverability and uptime.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Integrate with your tools</h3>
              <p className="text-gray-600">
                Connect your forms submissions to your favorite tools with more
                than 5,000 integrations available.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex space-x-4">
            <div className="text-blue-500 flex-shrink-0">
              {/* Replace with your icon */}
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2l2.09 6.26L18 9l-6 4.24L6 9l3.91-.74L12 2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg">Get rid of bots & spam</h3>
              <p className="text-gray-600">
                With the automatic ReCaptcha integration, you can get rid of
                bots & spam submissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
