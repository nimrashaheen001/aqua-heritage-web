import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  createContext,
} from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

import {
  Droplet,
  Leaf,
  ShieldCheck,
  Truck,
  Quote,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
  MessageCircle,
  PlayCircle,
  Send,
  User,
  Trash2,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import waveDroplets from "./assets/wave-droplets.png";
import pouringWater from "./assets/pouring-water.jpg";
import waterDropRipple from "./assets/water-drop-ripple.jpg";
import pureElegance from "./assets/pure-elegance.png";


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {
  whatsappNumber: "923363333043",
  phone: "+923363333043",
  email: "info.royalzee@gmail.com",
  address: "Lahore, Punjab, Pakistan",

  // Put your video here:
  // public/videos/hero.mp4
  heroVideoSrc: "/videos/hero.mp4",
};


/* =========================================================
   ORDER MODAL CONTEXT
========================================================= */

const OrderModalContext = createContext(() => {});

function useOrderModal() {
  return useContext(OrderModalContext);
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
  y = 26,
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   STAGGER GROUP
========================================================= */

function StaggerGroup({
  children,
  className = "",
  stagger = 0.12,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}


const staggerItem = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   DECORATIVE WAVE
========================================================= */

function WaveDivider({
  color = "#F3F8FA",
  flip = false,
}) {
  return (
    <div
      className={`wave-divider ${
        flip ? "wave-flip" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="wave-svg"
      >
        <path
          className="wave-path wave-1"
          fill={color}
          opacity="0.55"
          d="
            M0,40
            C240,90 480,0 720,40
            C960,80 1200,10 1440,40
            L1440,100
            L0,100
            Z
          "
        />

        <path
          className="wave-path wave-2"
          fill={color}
          d="
            M0,55
            C240,15 480,95 720,55
            C960,15 1200,85 1440,55
            L1440,100
            L0,100
            Z
          "
        />
      </svg>
    </div>
  );
}


/* =========================================================
   DROPLET RAIN
========================================================= */

function DropletRain({
  count = 10,
}) {
  const drops = Array.from({
    length: count,
  });

  return (
    <div
      className="droplet-rain"
      aria-hidden="true"
    >
      {drops.map((_, i) => {
        const left = (i * 9.7) % 100;
        const delay = (i * 1.3) % 6;
        const duration = 5 + (i % 4);
        const scale =
          0.5 + ((i * 7) % 10) / 20;

        return (
          <span
            key={i}
            className="droplet"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `scale(${scale})`,
            }}
          >
            <Droplet
              size={14}
              color="#BFE1EC"
              fill="#BFE1EC"
              strokeWidth={0}
            />
          </span>
        );
      })}
    </div>
  );
}


/* =========================================================
   SECTION EYEBROW
========================================================= */

function SectionEyebrow({
  children,
  dark = false,
}) {
  return (
    <div
      className={`eyebrow ${
        dark ? "eyebrow-dark" : ""
      }`}
    >
      <span className="eyebrow-line" />

      <span>{children}</span>

      <span className="eyebrow-line" />
    </div>
  );
}


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const openOrder = useOrderModal();

  const links = [
    "About",
    "Services",
    "Values",
    "Gallery",
    "Comments",
    "Contact",
  ];

  return (
    <motion.header
      className="nav"
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="nav-inner">

        <motion.div
          className="brand"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          <Droplet
            size={22}
            color="#0B3D57"
            fill="#BFE1EC"
            strokeWidth={1.4}
          />

          <span className="brand-name">
            Royal ZEE Water
          </span>
        </motion.div>


        <nav className="nav-links">
          {links.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.06,
              }}
              whileHover={{
                y: -2,
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>


        <motion.button
          type="button"
          onClick={openOrder}
          className="btn btn-primary nav-cta"
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Get Started
        </motion.button>


        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X
              size={24}
              color="#0B3D57"
            />
          ) : (
            <Menu
              size={24}
              color="#0B3D57"
            />
          )}
        </button>

      </div>


      <motion.div
        id="mobile-navigation"
        className={`nav-mobile ${open ? "nav-mobile-open" : ""}`}
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        aria-hidden={!open}
      >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-mobile-link"
                onClick={() =>
                  setOpen(false)
                }
              >
                {item}
              </a>
            ))}

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setOpen(false);
                openOrder();
              }}
            >
              Get Started
            </button>
      </motion.div>
    </motion.header>
  );
}


/* =========================================================
   HERO — FULL SCREEN BACKGROUND VIDEO
========================================================= */

function Hero() {
  const openOrder = useOrderModal();

  const heroRef = useRef(null);


  const {
    scrollYProgress,
  } = useScroll({
    target: heroRef,

    offset: [
      "start start",
      "end start",
    ],
  });


  /*
    Very subtle parallax on desktop.

    CSS will disable/neutralize this effect on
    mobile so that the video does not create
    gaps or overflow.
  */

  const mediaY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );


  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );


  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );


  return (
    <section
      className="hero"
      ref={heroRef}
    >

      {/* =================================================
          FULL-SCREEN VIDEO BACKGROUND
      ================================================= */}

      <motion.div
        className="hero-media"
        style={{
          y: mediaY,
        }}
      >

        <motion.video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"

          /*
             The video itself is now treated as
             a background layer.
          */

          initial={{
            scale: 1.08,
            opacity: 0,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <source
            src={CONFIG.heroVideoSrc}
            type="video/mp4"
          />

        </motion.video>


        {/* Cinematic dark overlay */}
        <div className="hero-overlay" />

      </motion.div>


      {/* =================================================
          DECORATIVE DROPLETS
      ================================================= */}

      <DropletRain count={10} />


      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <motion.div
        className="hero-content"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >

        <Reveal>

          <div className="eyebrow eyebrow-gold">

            <span className="eyebrow-line eyebrow-line-gold" />

            <span>
              Est. 2020 &middot; Purity Since the Source
            </span>

            <span className="eyebrow-line eyebrow-line-gold" />

          </div>

        </Reveal>


        <Reveal delay={120}>

          <h1 className="hero-title">

            Water, Drawn with

            <br />

            <em>
              Old-World Care
            </em>

          </h1>

        </Reveal>


        <Reveal delay={240}>

          <p className="hero-sub">
            Since 2020, Royal ZEE Water has drawn,
            filtered, and delivered water the traditional
            way — patient, deliberate, and true to its
            source. Currently delivering across Lahore.
          </p>

        </Reveal>


        <Reveal delay={360}>

          <div className="hero-actions">

            <motion.button
              type="button"
              onClick={openOrder}
              className="btn btn-primary"

              whileHover={{
                scale: 1.05,
                y: -3,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >
              Order Delivery
            </motion.button>


            <motion.a
              href="#about"
              className="btn btn-ghost btn-ghost-light"

              whileHover={{
                scale: 1.05,
                y: -3,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <PlayCircle
                size={18}
                style={{
                  marginRight: 8,
                }}
              />

              Our Heritage

            </motion.a>

          </div>

        </Reveal>

      </motion.div>


      {/* =================================================
          BOTTOM WAVE
      ================================================= */}

      <div className="hero-wave">

        <WaveDivider
          color="#F3F8FA"
        />

      </div>

    </section>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function About() {
  return (
    <section
      id="about"
      className="section about"
    >

      <div className="container about-grid">

        <Reveal className="about-image-wrap">

          <div className="about-image-frame">

            <video
              src={CONFIG.heroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Flowing water"
              className="about-image"
            />

          </div>

        </Reveal>


        <Reveal delay={150}>

          <SectionEyebrow>
            Our Heritage
          </SectionEyebrow>

          <h2 className="section-title">
            A Family Tradition,{" "}
            <em>Distilled</em>
          </h2>

          <p className="body-text">
            What began as a single natural spring,
            tended by hand, has grown into a company
            that still refuses to rush the process.
            Every stage — from source to bottle to tap —
            is treated as a craft passed down, not a
            step to be automated away.
          </p>

          <p className="body-text">
            We believe water deserves the same patience
            a vintner gives wine, or a miller gives flour
            — the result of care, not shortcuts.
          </p>


          <div className="stat-row">

            {[
              ["6", "Years of Craft"],
              ["12", "Natural Sources"],
              ["1M", "People Served"],
            ].map(([num, label]) => (

              <div
                key={label}
                className="stat"
              >

                <div className="stat-num">
                  {num}
                </div>

                <div className="stat-label">
                  {label}
                </div>

              </div>

            ))}

          </div>

        </Reveal>

      </div>

    </section>
  );
}


/* =========================================================
   SERVICES
========================================================= */

function Services() {

  const shouldReduceMotion = useReducedMotion();

  const items = [
    {
      img: pouringWater,
      title: "Natural Spring Water",
      desc:
        "Sourced from protected springs and bottled at the origin, untouched by processing.",
    },

    {
      img: waterDropRipple,
      title: "Home Purification",
      desc:
        "Classical multi-stage filtration systems, installed and tended by our own artisans.",
    },

    {
      img: waveDroplets,
      title: "Scheduled Delivery",
      desc:
        "A quiet, reliable rhythm of deliveries across Lahore — the same care as day one, on time.",
    },
  ];


  const cardContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.15,
      },
    },
  };


  const cardAnimation = {

    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.92,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };


  const imageAnimation = {

    hidden: {
      opacity: 0,
      scale: 0.65,
      rotate: -8,
      y: 30,
    },

    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,

      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };


  return (
    <section
      id="services"
      className="section services"
    >

      <div className="wave-top">
        <WaveDivider color="#0B3D57" />
      </div>


      <div className="container">

        <Reveal>

          <div className="section-head-center">

            <SectionEyebrow dark>
              What We Offer
            </SectionEyebrow>


            <motion.h2
              className="section-title light"

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.5,
              }}

              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Services Worth Their{" "}
              <em>Weight</em>
            </motion.h2>

          </div>

        </Reveal>


        <motion.div
          className="card-grid"
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          {items.map((s, index) => (

            <motion.div
              key={s.title}
              className="service-card-float"
              variants={cardAnimation}
              animate={{
                y: shouldReduceMotion ? 0 : [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 5 + index * 0.7,
                delay: index * 0.4,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >

            <motion.div
              className="card"

              whileHover={{
                y: -12,
                scale: 1.025,
                boxShadow:
                  "0 25px 55px rgba(11,61,87,0.25)",
              }}

              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >

              <motion.div
                className="card-img-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
              >

                <motion.div
                  className="service-image-float"
                  animate={{
                    y: shouldReduceMotion ? 0 : [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 4.5 + index * 0.6,
                    delay: index * 0.35,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    className="card-img"
                    variants={imageAnimation}

                    whileHover={{
                      scale: 1.12,
                      rotate: 1.5,
                    }}

                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>


                <motion.div
                  className="image-glow"

                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    delay:
                      0.4 + index * 0.2,
                    duration: 0.8,
                  }}
                />

              </motion.div>


              <motion.div
                className="card-body"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.4,
                }}

                transition={{
                  delay:
                    0.35 + index * 0.15,
                  duration: 0.6,
                }}
              >

                <motion.h3
                  className="card-title"

                  whileHover={{
                    x: 4,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {s.title}
                </motion.h3>

                <p className="card-desc">
                  {s.desc}
                </p>

              </motion.div>

            </motion.div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}


/* =========================================================
   VALUES
========================================================= */

function Values() {

  const values = [
    {
      Icon: ShieldCheck,
      title: "Purity Tested",
      desc:
        "Every batch verified against classical purity standards, twice over.",
    },

    {
      Icon: Leaf,
      title: "Naturally Sourced",
      desc:
        "No synthetic treatment — only what the spring itself provides.",
    },

    {
      Icon: Truck,
      title: "Gentle Delivery",
      desc:
        "Handled the way fine goods are, not commodities.",
    },

    {
      Icon: Droplet,
      title: "Timeless Craft",
      desc:
        "Methods refined over decades, not reinvented each season.",
    },
  ];


  return (
    <section
      id="values"
      className="section values"
    >

      <div className="container">

        <Reveal>

          <div className="section-head-center">

            <SectionEyebrow>
              Our Principles
            </SectionEyebrow>

            <h2 className="section-title">
              Standards We Won't Bend
            </h2>

          </div>

        </Reveal>


        <StaggerGroup className="values-grid">

          {values.map(
            ({
              Icon,
              title,
              desc,
            }) => (

              <motion.div
                key={title}
                className="value-item"
                variants={staggerItem}
                whileHover={{
                  y: -6,
                }}
              >

                <motion.div
                  className="value-icon"

                  whileHover={{
                    scale: 1.12,
                    rotate: 6,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >

                  <span className="ripple-ring" />

                  <Icon
                    size={24}
                    color="#A98237"
                    strokeWidth={1.3}
                  />

                </motion.div>


                <h4 className="value-title">
                  {title}
                </h4>

                <p className="value-desc">
                  {desc}
                </p>

              </motion.div>

            )
          )}

        </StaggerGroup>

      </div>

    </section>
  );
}


/* =========================================================
   GALLERY
========================================================= */

function Gallery() {

  return (
    <section
      id="gallery"
      className="gallery"
    >

      <motion.img
        src={pureElegance}
        alt="Pure elegance, naturally — water in motion"
        className="gallery-img"

        initial={{
          scale: 1.12,
        }}

        whileInView={{
          scale: 1,
        }}

        viewport={{
          once: true,
          amount: 0.3,
        }}

        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      />


      <div className="gallery-overlay">

        <Reveal>

          <SectionEyebrow dark>
            The Source
          </SectionEyebrow>

          <h2 className="section-title light gallery-title">
            Pure Elegance,{" "}
            <em>Naturally</em>
          </h2>

        </Reveal>

      </div>

    </section>
  );
}


/* =========================================================
   TESTIMONIAL
========================================================= */

function Testimonial() {

  return (
    <section
      className="section testimonial"
    >

      <Reveal className="testimonial-inner">

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            type: "spring",
            stiffness: 220,
            damping: 14,
            delay: 0.1,
          }}

          style={{
            display: "inline-block",
          }}
        >

          <Quote
            size={30}
            color="#A98237"
          />

        </motion.div>


        <p className="testimonial-quote">
          "Royal ZEE Water tastes like water is
          supposed to taste — the way I remember
          it from my grandmother's well."
        </p>


        <div className="testimonial-author">
          — A Customer Since 2020
        </div>

      </Reveal>

    </section>
  );
}


/* =========================================================
   COMMENTS
========================================================= */

const COMMENTS_KEY =
  "aqua-heritage-comments";


const seedComments = [

  {
    id: "seed-1",
    name: "Maria D.",
    message:
      "We've been ordering weekly deliveries for two years now — the taste really is different from store-bought bottles.",
    date:
      "2026-06-14T10:00:00.000Z",
    rating: 5,
  },

  {
    id: "seed-2",
    name: "James O.",
    message:
      "The purification install was clean and the technician explained every step. Highly recommend.",
    date:
      "2026-07-02T15:30:00.000Z",
    rating: 5,
  },

  {
    id: "seed-3",
    name: "Priya K.",
    message:
      "Lovely, honest company — though our first delivery arrived a little later than promised.",
    date:
      "2026-05-20T09:15:00.000Z",
    rating: 4,
  },

  {
    id: "seed-4",
    name: "Tom H.",
    message:
      "Simple, fresh, and reliable. Exactly the kind of water we want for our family table.",
    date:
      "2026-07-18T12:00:00.000Z",
    rating: 5,
  },

];


function timeAgo(iso) {

  const diffMs =
    Date.now() -
    new Date(iso).getTime();

  const mins =
    Math.floor(diffMs / 60000);

  if (mins < 1) {
    return "just now";
  }

  if (mins < 60) {
    return `${mins}m ago`;
  }

  const hrs =
    Math.floor(mins / 60);

  if (hrs < 24) {
    return `${hrs}h ago`;
  }

  const days =
    Math.floor(hrs / 24);

  if (days < 30) {
    return `${days}d ago`;
  }

  return new Date(
    iso
  ).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
}


function initials(name) {

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(
      (w) =>
        w[0]?.toUpperCase() || ""
    )
    .join("");
}


/* =========================================================
   STAR ROW
========================================================= */

function StarRow({
  rating,
  size = 14,
}) {

  return (
    <div
      className="star-row"
      aria-label={`${rating} out of 5 stars`}
    >

      {Array.from({
        length: 5,
      }).map((_, i) => (

        <Star
          key={i}
          size={size}
          color="#A98237"
          fill={
            i < rating
              ? "#A98237"
              : "transparent"
          }
          strokeWidth={1.4}
        />

      ))}

    </div>
  );
}


/* =========================================================
   STAR PICKER
========================================================= */

function StarPicker({
  value,
  onChange,
}) {

  const [hover, setHover] =
    useState(0);

  return (
    <div
      className="star-picker"
      role="radiogroup"
      aria-label="Rate your experience"
    >

      {Array.from({
        length: 5,
      }).map((_, i) => {

        const n = i + 1;

        const active = hover
          ? n <= hover
          : n <= value;

        return (
          <motion.button
            key={n}
            type="button"
            className="star-picker-btn"
            aria-label={`${n} star${
              n > 1 ? "s" : ""
            }`}
            onClick={() =>
              onChange(n)
            }
            onMouseEnter={() =>
              setHover(n)
            }
            onMouseLeave={() =>
              setHover(0)
            }

            whileHover={{
              scale: 1.15,
            }}

            whileTap={{
              scale: 0.9,
            }}
          >

            <Star
              size={20}
              color="#A98237"
              fill={
                active
                  ? "#A98237"
                  : "transparent"
              }
              strokeWidth={1.4}
            />

          </motion.button>
        );

      })}

    </div>
  );
}


/* =========================================================
   COMMENTS SECTION
========================================================= */

function Comments() {

  const [comments, setComments] =
    useState([]);

  const [name, setName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const [error, setError] =
    useState("");

  const trackRef =
    useRef(null);


  useEffect(() => {

    try {

      const stored =
        localStorage.getItem(
          COMMENTS_KEY
        );

      const parsed =
        stored
          ? JSON.parse(stored)
          : seedComments;

      setComments(
        parsed.map((c) => ({
          rating: 5,
          ...c,
        }))
      );

    } catch {

      setComments(seedComments);

    }

  }, []);


  const persist = (next) => {

    setComments(next);

    try {

      localStorage.setItem(
        COMMENTS_KEY,
        JSON.stringify(next)
      );

    } catch {
      /* storage unavailable */
    }
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !name.trim() ||
      !message.trim()
    ) {

      setError(
        "Please add your name and a comment."
      );

      return;
    }


    const entry = {

      id: `c-${Date.now()}`,

      name: name.trim(),

      message:
        message.trim(),

      date:
        new Date().toISOString(),

      rating,
    };


    persist([
      entry,
      ...comments,
    ]);


    setName("");
    setMessage("");
    setRating(5);
    setError("");


    requestAnimationFrame(() => {

      trackRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      });

    });
  };


  const handleDelete = (id) => {

    persist(
      comments.filter(
        (c) => c.id !== id
      )
    );
  };


  const scrollByCard = (dir) => {

    const el =
      trackRef.current;

    if (!el) return;

    const card =
      el.querySelector(
        ".review-card"
      );

    const amount = card
      ? card.offsetWidth + 20
      : 320;

    el.scrollBy({
      left: dir * amount,
      behavior: "smooth",
    });
  };


  return (
    <section
      id="comments"
      className="section comments"
    >

      <div className="container">

        <Reveal>

          <div className="section-head-center">

            <SectionEyebrow>
              From Our Households
            </SectionEyebrow>

            <h2 className="section-title">
              Kind Words from{" "}
              <em>Our Customers</em>
            </h2>

            <p className="body-text comments-sub">
              Fresh water, honest craft, and
              the quality families are happy to
              bring home every day.
            </p>

          </div>

        </Reveal>


        <div className="review-carousel-wrap">

          <button
            className="review-nav review-nav-prev"
            onClick={() =>
              scrollByCard(-1)
            }
            aria-label="Previous reviews"
          >
            <ChevronLeft size={18} />
          </button>


          <button
            className="review-nav review-nav-next"
            onClick={() =>
              scrollByCard(1)
            }
            aria-label="Next reviews"
          >
            <ChevronRight size={18} />
          </button>


          <div
            className="review-track"
            ref={trackRef}
          >

            <AnimatePresence
              initial={false}
            >

              {comments.map(
                (c, i) => (

                  <motion.div
                    key={c.id}
                    className="review-card"
                    layout

                    initial={{
                      opacity: 0,
                      y: 18,
                      scale: 0.96,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 0.94,
                    }}

                    transition={{
                      duration: 0.45,
                      delay:
                        i < 4
                          ? i * 0.08
                          : 0,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >

                    <StarRow
                      rating={
                        c.rating ?? 5
                      }
                    />

                    <Quote
                      size={20}
                      color="#DCEBF0"
                      className="review-quote-icon"
                    />

                    <p className="review-message">
                      &ldquo;
                      {c.message}
                      &rdquo;
                    </p>


                    <div className="review-footer">

                      <div className="review-avatar">
                        {initials(c.name) || (
                          <User size={14} />
                        )}
                      </div>


                      <div className="review-person">

                        <span className="review-name">
                          {c.name}
                        </span>

                        <span className="review-tag">
                          Royal ZEE Water Family
                        </span>

                      </div>


                      <CheckCircle2
                        size={16}
                        color="#3E7C97"
                        className="review-verified"
                      />


                      {c.id.startsWith(
                        "c-"
                      ) && (

                        <button
                          className="comment-delete review-delete"
                          onClick={() =>
                            handleDelete(
                              c.id
                            )
                          }
                          aria-label="Delete comment"
                          title="Delete comment"
                        >
                          <Trash2 size={13} />
                        </button>

                      )}

                    </div>

                  </motion.div>

                )
              )}

            </AnimatePresence>


            {comments.length === 0 && (

              <p className="comment-empty">
                Be the first to share your experience.
              </p>

            )}

          </div>

        </div>


        <Reveal
          delay={100}
          className="comment-form-wrap"
        >

          <form
            className="comment-form"
            onSubmit={handleSubmit}
          >

            <div className="comment-form-top">

              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="comment-input"
                maxLength={60}
              />


              <StarPicker
                value={rating}
                onChange={setRating}
              />

            </div>


            <textarea
              placeholder="Share your experience with Royal ZEE Water..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              className="comment-textarea"
              rows={3}
              maxLength={500}
            />


            <div className="comment-form-footer">

              <AnimatePresence>

                {error && (

                  <motion.span
                    className="comment-error"

                    initial={{
                      opacity: 0,
                      x: -8,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,
                    }}
                  >
                    {error}
                  </motion.span>

                )}

              </AnimatePresence>


              <motion.button
                type="submit"
                className="btn btn-primary comment-submit"

                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}

                whileTap={{
                  scale: 0.96,
                }}
              >

                <Send
                  size={16}
                  style={{
                    marginRight: 8,
                  }}
                />

                Post Comment

              </motion.button>

            </div>

          </form>

        </Reveal>

      </div>

    </section>
  );
}


/* =========================================================
   CONTACT
========================================================= */

function Contact() {

  const openOrder =
    useOrderModal();


  return (
    <section
      id="contact"
      className="section contact"
    >

      <div className="wave-top">
        <WaveDivider color="#0B3D57" />
      </div>


      <div className="container contact-grid">

        <Reveal>

          <SectionEyebrow dark>
            Get in Touch
          </SectionEyebrow>


          <h2 className="section-title light">
            Bring the Spring
            <br />
            <em>to Your Table</em>
          </h2>


          <p className="body-text light-text">
            Speak with our team about home delivery,
            purification systems, or bulk orders for
            your business. Currently delivering in Lahore.
          </p>


          <div className="contact-buttons">

            <motion.button
              type="button"
              onClick={openOrder}
              className="btn btn-primary contact-cta"

              whileHover={{
                scale: 1.03,
                y: -2,
              }}

              whileTap={{
                scale: 0.97,
              }}
            >

              Start Your Order

              <ArrowRight
                size={16}
                style={{
                  marginLeft: 10,
                }}
              />

            </motion.button>

          </div>

        </Reveal>


        <Reveal delay={150}>

          <div className="contact-info">

            <div className="contact-row">

              <MapPin
                size={18}
                color="#D9C79A"
                strokeWidth={1.4}
              />

              <span>
                {CONFIG.address}
              </span>

            </div>


            <div className="contact-row">

              <Phone
                size={18}
                color="#D9C79A"
                strokeWidth={1.4}
              />

              <span>
                {CONFIG.phone}
              </span>

            </div>


            <div className="contact-row">

              <Mail
                size={18}
                color="#D9C79A"
                strokeWidth={1.4}
              />

              <span>
                {CONFIG.email}
              </span>

            </div>


            <div className="contact-row">

              <MessageCircle
                size={18}
                color="#D9C79A"
                strokeWidth={1.4}
              />

              <span>
                WhatsApp: {CONFIG.phone}
              </span>

            </div>

          </div>

        </Reveal>

      </div>


      <div className="footer-bottom">
        © {new Date().getFullYear()} Royal ZEE Water.
        Crafted with patience, since 2020.
      </div>

    </section>
  );
}


/* =========================================================
   ORDER MODAL
========================================================= */

function OrderModal({
  open,
  onClose,
}) {

  useEffect(() => {

    if (!open) return;


    const onKey = (e) => {

      if (e.key === "Escape") {
        onClose();
      }

    };


    document.addEventListener(
      "keydown",
      onKey
    );


    document.body.style.overflow =
      "hidden";


    return () => {

      document.removeEventListener(
        "keydown",
        onKey
      );

      document.body.style.overflow =
        "";

    };

  }, [open, onClose]);


  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="order-modal-backdrop"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 0.3,
          }}

          onClick={onClose}
        >

          <motion.div
            className="order-modal"

            role="dialog"

            aria-modal="true"

            aria-label="Choose how to order"

            onClick={(e) =>
              e.stopPropagation()
            }

            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}

            transition={{
              type: "spring",
              stiffness: 300,
              damping: 28,
            }}
          >

            <div className="order-modal-top">

              <motion.div
                className="order-modal-icon"

                initial={{
                  scale: 0.6,
                  opacity: 0,
                }}

                animate={{
                  scale: 1,
                  opacity: 1,
                }}

                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 16,
                }}
              >

                <Droplet
                  size={24}
                  color="#0B3D57"
                  fill="#BFE1EC"
                  strokeWidth={1.2}
                />

              </motion.div>


              <button
                className="order-modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                <X
                  size={18}
                  color="#3E5A67"
                />
              </button>

            </div>


            <div className="eyebrow order-modal-eyebrow">
              <span>
                Source-Direct Delivery
              </span>
            </div>


            <h3 className="order-modal-title">
              Bring pure water
              <br />
              <em>
                to your doorstep.
              </em>
            </h3>


            <p className="order-modal-sub">
              Choose your preferred way to place
              your order, or ask us about delivery
              in your area.
            </p>


            <div className="order-modal-actions">

              <motion.a
                href={`https://wa.me/${CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="order-option order-option-primary"

                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}

                whileTap={{
                  scale: 0.98,
                }}
              >

                <span className="order-option-icon order-option-icon-light">

                  <MessageCircle
                    size={20}
                    color="#fff"
                  />

                </span>


                <span className="order-option-text">

                  <span className="order-option-title">
                    Order on WhatsApp
                  </span>

                  <span className="order-option-desc">
                    Fastest way to place your order
                  </span>

                </span>


                <ArrowRight
                  size={18}
                  className="order-option-arrow"
                />

              </motion.a>


              <motion.a
                href={`tel:${CONFIG.phone.replace(
                  /[^+\d]/g,
                  ""
                )}`}
                className="order-option order-option-ghost"

                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}

                whileTap={{
                  scale: 0.98,
                }}
              >

                <span className="order-option-icon order-option-icon-dark">

                  <Phone
                    size={18}
                    color="#F3F8FA"
                  />

                </span>


                <span className="order-option-text">

                  <span className="order-option-eyebrow">
                    Call to Order
                  </span>

                  <span className="order-option-title order-option-title-dark">
                    {CONFIG.phone}
                  </span>

                </span>


                <ArrowRight
                  size={18}
                  className="order-option-arrow order-option-arrow-dark"
                />

              </motion.a>


              <div className="order-option order-option-info">

                <span className="order-option-icon order-option-icon-check">

                  <CheckCircle2
                    size={16}
                    color="#0B3D57"
                  />

                </span>


                <span className="order-option-text">

                  <span className="order-option-eyebrow">
                    Source to Doorstep
                  </span>

                  <span className="order-option-desc">
                    Natural spring water · Delivered with care
                  </span>

                </span>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}


/* =========================================================
   FLOATING WHATSAPP BUTTON
========================================================= */

function WhatsAppFloat() {

  return (
    <motion.a
      href={`https://wa.me/${CONFIG.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"

      initial={{
        opacity: 0,
        scale: 0,
        y: 40,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      transition={{
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}

      whileHover={{
        scale: 1.12,
      }}

      whileTap={{
        scale: 0.92,
      }}
    >

      <motion.span
        className="whatsapp-pulse"

        animate={{
          scale: [1, 1.6],
          opacity: [0.5, 0],
        }}

        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <MessageCircle
        size={26}
        color="#fff"
        fill="#fff"
        strokeWidth={0}
      />

    </motion.a>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  const [orderOpen, setOrderOpen] =
    useState(false);


  const openOrder = () =>
    setOrderOpen(true);


  return (

    <OrderModalContext.Provider
      value={openOrder}
    >

      <div className="app">

        <Navbar />

        <Hero />

        <About />

        <Services />

        <Values />

        <Gallery />

        <Testimonial />

        <Comments />

        <Contact />

        <WhatsAppFloat />

        <OrderModal
          open={orderOpen}
          onClose={() =>
            setOrderOpen(false)
          }
        />

      </div>

    </OrderModalContext.Provider>

  );
}