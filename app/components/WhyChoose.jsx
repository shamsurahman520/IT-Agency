"use client";
import { useEffect } from "react";

const WhyChoose = () => {
  useEffect(() => {
    // Load YouTube IFrame API
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
    let player;

    window.onYouTubeIframeAPIReady = () => {
      player = new YT.Player("youtube-player", {
        videoId: "w1cR08GLqiQ", // Correct YouTube video ID
        events: {
          onReady: (event) => {
            console.log("Video is ready");
            // Example: Start playing automatically (optional)
            // event.target.playVideo();
          },
        },
      });
    };

    return () => {
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, []);

  return (
    <section className="md:px-12 px-4 py-14">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Content Section */}
        <div className="md:w-[58%]">
          <h2 className="lg:text-5xl md:text-5xl text-2xl font-bold pb-2">Why Choose Us</h2>
          <p className="leading-6 text-[#646464]">
            Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.
          </p>
          <br />
          <h2 className="text-2xl font-bold pb-2">Who We Are</h2>
          <p className="leading-6 text-[#646464]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <br />
          <h2 className="text-2xl font-bold pb-2">Our History</h2>
          <p className="leading-6 text-[#646464]">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.
          </p>
          <br />
          <h2 className="text-2xl font-bold pb-2">Our Mission</h2>
          <p className="leading-6 text-[#646464]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
          </p>
        </div>
        {/* Video Section */}
        <div className="lg:w-[41%] md:w-[60%] w-[100%]">
          <div className="relative h-[600px] rounded-lg overflow-hidden w-full  ">
            <iframe
              id="youtube-player"
              className="absolute object-cover top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/w1cR08GLqiQ" // Correct embed URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
