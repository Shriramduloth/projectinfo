import { Button } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 bg-[#1E1E1E] text-white items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-5 text-bright-sun-400 ">Contact Us</h1>
        <p className="text-gray-400 mb-8">
          Please fill in the form below so we can respond to your inquiry
        </p>

        <div className="rounded-lg p-8 max-w-3xl">
          <form className="space-y-6">
            {/* Language Preference */}
            <div>
              <label className="block mb-2">
                Is English your preferred language or should we contact you in another language? <span className="text-mine-shaft-300">*</span>
              </label>
              <select className="input-field w-full">
                <option value="">Please select your preferred language</option>
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>

            {/* Topic */}
            <div>
              <label className="block mb-2">
                What is your question about? <span className="text-red-500">*</span>
              </label>
              <select className="input-field w-full">
                <option value="">Please select a topic</option>
                <option value="jobs">Job Search</option>
                <option value="account">Account Issues</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="input-field w-full"
                placeholder="Insert a subject line here"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="input-field w-full"
                  placeholder="Type your first name here"
                />
              </div>
              <div>
                <label className="block mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="input-field w-full"
                  placeholder="Type your last name here"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="input-field w-full"
                placeholder="Type your email address here"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block mb-2">File Upload</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <IconUpload className="text-[#FFB800] mr-2" size={24} />
                  <span>Drop files here or click to upload</span>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpeg,.png"
                />
                <p className="text-sm text-gray-400">
                  [File size: 2MB pdf, jpeg, png]
                </p>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="input-field w-full h-32"
                placeholder="Please describe your issue."
              ></textarea>
            </div>
            <div className=' flex justify-center items-center'>
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};