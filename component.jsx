/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i8DwndTzD9P
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <header className="w-full bg-gray-900 text-white py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">John Doe</h1>
              <h2 className="text-2xl font-semibold mb-4">Automation Tester</h2>
              <p className="text-gray-300 mb-8">
                Experienced Automation Tester with a passion for building reliable and efficient software systems.
                Proficient in various testing frameworks and tools, delivering high-quality results for clients.
              </p>
              <Link
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition duration-300"
                href="#"
              >
                Get in Touch
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                alt="Automation Tester"
                className="rounded-md"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
          </div>
        </div>
      </header>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-6">
              <PuzzleIcon className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Selenium</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Proficient in Selenium WebDriver for cross-browser automation testing.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-6">
              <CodeIcon className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Python</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Experienced in writing automation scripts using Python and its testing frameworks.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-6">
              <LayersIcon className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">CI/CD</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Familiar with integrating automation tests into Continuous Integration and Deployment pipelines.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-6">
              <ClipboardIcon className="h-8 w-8 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">Test Reporting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Skilled in generating comprehensive test reports and dashboards for stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <img
                alt="Project 1"
                className="w-full h-48 object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Developed a comprehensive end-to-end automation test suite for an e-commerce website, covering user
                  journeys, shopping cart, and checkout processes.
                </p>
                <Link
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition duration-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <img
                alt="Project 2"
                className="w-full h-48 object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App Testing</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Implemented a comprehensive mobile app testing framework using Appium, covering both Android and iOS
                  platforms.
                </p>
                <Link
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition duration-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
              <img
                alt="Project 3"
                className="w-full h-48 object-cover"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">API Automation</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Developed a comprehensive API automation test suite using tools like Postman and Newman, ensuring the
                  reliability and functionality of the application's backend.
                </p>
                <Link
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium transition duration-300"
                  href="#"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24 bg-gray-100 dark:bg-gray-800" id="contact">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" required type="text" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="john@example.com" required type="email" />
              </div>
            </div>
            <div className="mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." required rows={5} />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LayersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}