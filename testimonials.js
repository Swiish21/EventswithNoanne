const testimonials = [
  {
    name: "John Doe",
    title: "Software Developer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#WebDevelopment"],
    avatar: "./Assets/mc.jpg",
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#Leadership"],
    avatar: "./Assets/mc.jpg",
  },
  {
    name: "Alice Johnson",
    title: "Designer",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#Design"],
    avatar: "./Assets/mc.jpg",
  },
  {
    name: "Bob Brown",
    title: "Marketing Specialist",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#Marketing"],
    avatar: "./Assets/mc.jpg",
  },
  {
    name: "Bravin Dan",
    title: "Marketing Specialist",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#Marketing"],
    avatar: "./Assets/mc.jpg",
  },
  {
    name: "Malcom Oty",
    title: "Marketing Specialist",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    tags: ["#TailwindCSS", "#Marketing"],
    avatar: "./Assets/mc.jpg",
  },
];

function createTestimonialCard(testimonial) {
  const card = document.createElement("div");
  card.className = "max-w-sm bg-white rounded-lg overflow-hidden shadow-lg";

  const contentDiv = document.createElement("div");
  contentDiv.className = "px-6 py-4";

  const flexDiv = document.createElement("div");
  flexDiv.className = "flex items-center";

  const img = document.createElement("img");
  img.className = "w-10 h-10 rounded-full mr-4";
  img.src = testimonial.avatar;
  img.alt = "User Avatar";

  const textDiv = document.createElement("div");
  textDiv.className = "flex flex-col";

  const nameSpan = document.createElement("span");
  nameSpan.className = "font-bold text-gray-900";
  nameSpan.textContent = testimonial.name;

  const titleSpan = document.createElement("span");
  titleSpan.className = "text-gray-600 text-sm";
  titleSpan.textContent = testimonial.title;

  const testimonyParagraph = document.createElement("p");
  testimonyParagraph.className = "mt-4 text-gray-700 text-base";
  testimonyParagraph.textContent = testimonial.testimony;

  const footerDiv = document.createElement("div");
  footerDiv.className = "px-6 py-4 bg-gray-50";

  testimonial.tags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.className =
      "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2";
    tagSpan.textContent = tag;
    footerDiv.appendChild(tagSpan);
  });

  flexDiv.appendChild(img);
  flexDiv.appendChild(textDiv);
  textDiv.appendChild(nameSpan);
  textDiv.appendChild(titleSpan);

  contentDiv.appendChild(flexDiv);
  contentDiv.appendChild(testimonyParagraph);

  card.appendChild(contentDiv);
  card.appendChild(footerDiv);

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonialGrid = document.getElementById("testimonial-grid");
  testimonials.forEach((testimonial) => {
    testimonialGrid.appendChild(createTestimonialCard(testimonial));
  });
});
