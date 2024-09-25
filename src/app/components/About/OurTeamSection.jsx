import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function OurTeamSection() {
  const teamMembers = [
    {
      name: "Wade Warren",
      title: "Founder",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Leslie Alexander",
      title: "Co-Founder",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Esther Howard",
      title: "Chief Marketing Officer",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Cody Fisher",
      title: "Lead Developer",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Jenny Wilson",
      title: "Head of Design",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
    {
      name: "Jacob Jones",
      title: "Operations Manager",
      imgSrc: "/images/aboutPage/OurTeamSection/member1.png",
      facebookUrl: "#",
      twitterUrl: "#",
      linkedinUrl: "#",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-[32px] md:text-[40px] leading-tight font-semibold text-accent">
          Meet Our Team
        </h3>
        <p className="mt-4 text-lg md:text-xl text-[#676767]">
          Our team is made up of passionate professionals with diverse
          backgrounds. We are united by a common goal: to create the best
          possible tools for condo communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative overflow-hidden group">
            <Image
              className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
              src={member.imgSrc}
              alt={`Photo of ${member.name}`}
              height={350}
              width={350}
            />
            <div className="p-6 bg-white rounded-tl-3xl absolute w-60 bottom-0 right-12 z-50 transform group-hover:translate-y-0 transition-transform duration-500 ">
              <h3 className="text-lg text-[#333333] font-medium">
                {member.name}
              </h3>
              <p className="text-[#666666] text-xs">{member.title}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={member.facebookUrl}
                  aria-label="Facebook"
                  className="text-[#4C4C4C] text-2xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.twitterUrl}
                  aria-label="Twitter"
                  className="text-[#4C4C4C] text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.linkedinUrl}
                  aria-label="LinkedIn"
                  className="text-[#4C4C4C] text-2xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
