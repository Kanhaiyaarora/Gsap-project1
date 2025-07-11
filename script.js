function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    y: -40,
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.3,
  });

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.3,
  });

  tl.from(
    ".center-part2 img",
    {
      x: 50,
      opacity: 0,
      duration: 0.3,
    },
    "-=0.3"
  );
  tl.from(".center-part1 button", {
    y: 50,
    opacity: 0,
    duration: 0.3,
  });

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}

page1Animation();

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 70%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  });

  // line 1 boxes

  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "together"
  );
  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "together"
  );

  // line 2 boxes

  tl2.from(
    ".elem.line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "forever"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "forever"
  );
}

page2Animation();
