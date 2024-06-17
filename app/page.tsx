import SwitchButton from './components/ThemeToggleButton';
import SideBar from './components/SideBar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full font-sans xs:py-4 md:py-8 xs:px-4 sm:px-8">
      <div className="w-full relative grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 lg:gap-16 xs:pt-8 lg:px-[6.5rem]">
        <div className="w-full flex flex-col gap-3 md:col-span-1 items-center md:items-center text-center bg-white dark:bg-gray-800 py-4 px-4 xs:rounded-lg">
          <SideBar />
        </div>
        <div className="md:col-span-2 bg-white dark:bg-gray-800 py-4 xs:rounded-lg overflow-y-auto">
          <section className="w-full flex flex-col gap-4 px-4">
            <h1 className="relative w-full flex items-center justify-between text-xl font-semibold text-left">
              About{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </h1>

            <p>
              I am a Software Engineer with years of experience building
              Enterprise Software Products, managing testing and deployment, and
              coordinating software development teams to deliver high-quality
              software solutions that empower business growth and success.
            </p>

            <p>
              I hold a Bachelor of Engineering in Electronic Engineering from
              the University of Nigeria, Nsukka, and a Cloud Developer
              NanoDegree from Udacity. I am skilled in cloud-native
              technologies, particularly AWS and GCP, and I utilize Cloud
              Technologies to develop scalable and efficient applications.
              Additionally, I possess strong interpersonal skills.
            </p>

            <p>
              I excel in Software Engineering and Technology, thriving on
              solving complex problems and developing innovative products. I
              have successfully contributed to the creation of various software
              products, including but not limited to{' '}
              <Link
                target="_blank"
                href="https://www.betika.com/en-ke/"
                className="dark:text-amber-400 text-amber-600 font-medium underline"
              >
                Betika
              </Link>{' '}
              for sports betting & gamification,{' '}
              <Link
                target="_blank"
                href="https://versus.africa"
                className="dark:text-amber-400 text-amber-600 font-medium underline"
              >
                Versus
              </Link>{' '}
              for social listening and consumer market insights, and{' '}
              <Link
                target="_blank"
                href="https://www.kwaba.africa"
                className="dark:text-amber-400 text-amber-600 font-medium underline"
              >
                Kwaba
              </Link>{' '}
              for rent payment, savings & investment. My expertise lies in
              designing and implementing APIs, services, and features that
              significantly enhance user experience and functionality.
            </p>

            <p>
              I am a self-motivated, collaborative, and result-oriented
              engineer, who values continuous learning and improvement. I strive
              to use my skills and knowledge to help businesses achieve their
              goals and create a positive impact.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
