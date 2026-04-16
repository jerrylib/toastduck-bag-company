import { socialLinks } from '../config/social';

const Team = () => {
  const teamMembers = [
    {
      image: "/images/avator1.png",
      name: "Ferris",
      position: "CEO, Founder",
      socialLinks: socialLinks,
    },
    {
      image: "/images/avator2.png",
      name: "Linda",
      position: "CFO",
      socialLinks: [
        // { icon: "fa-facebook", href: "#" },
        // { icon: "fa-twitter", href: "#" },
        // { icon: "fa-google-plus", href: "#" },
        // { icon: "fa-vimeo", href: "#" },
        // { icon: "fa-youtube", href: "#" },
        // { icon: "fa-pinterest-p", href: "#" }
  ]
    },
    {
      image: "/images/avator2.jpg",
      name: "Cassie",
      position: "Marketing Manager",
      socialLinks: [
        { icon: "fa-facebook", href: "https://www.facebook.com/share/1GdhtaFmfF/?mibextid=wwXIfr" },
        { icon: "fa-linkedin", href: "https://www.linkedin.com/in/cassie-huang-791537323/" },
        // { icon: "fa-facebook", href: "#" },
        // { icon: "fa-twitter", href: "#" },
        // { icon: "fa-google-plus", href: "#" },
        // { icon: "fa-vimeo", href: "#" },
        // { icon: "fa-youtube", href: "#" },
        // { icon: "fa-pinterest-p", href: "#" }
  ]
    }
  ];

  return (
    <section className="section-lg bg-gray-lighter text-center" id="team">
      <div className="container px-4">
        <div className="row justify-content-xl-center row-50">
          <div className="col-12 col-xl-9">
            <h4 className="heading-decorated text-2xl md:text-3xl font-bold">Our Team</h4>
            <p className="mt-4 leading-relaxed text-sm md:text-base">
              We are a team of professionals from different backgrounds who share
              knowledge and expertise in business consulting aiming to provide
              professional services and support to our clients to the highest
              standards.
            </p>
          </div>
        </div>
        <div className="row row-50">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-6 md:mb-0">
              <div className="thumb thumb-corporate">
                <div className="thumb-corporate__main">
                  <img
                    src={member.image}
                    alt={member.name}
                    width="420"
                    height="315"
                    className="w-full h-auto"
                  />
                  <div className="thumb-corporate__overlay">
                    <ul className="list-inline-sm thumb-corporate__list">
                      {member.socialLinks.map((social, socialIndex) => (
                        <li key={socialIndex}>
                          <a className={`icon-sm ${social.icon} icon`} target="__blank" href={social.href}></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="thumb-corporate__caption">
                  <p className="thumb__title">
                    <a href="#">{member.name}</a>
                  </p>
                  <p className="thumb__subtitle">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
