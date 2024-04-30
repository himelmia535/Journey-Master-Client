import "animate.css";
const Accordion = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What makes the Sundarbans in Bangladesh unique?
        </div>
        <div className="collapse-content">
          <p>
            The Sundarbans is the largest mangrove forest in the world, known
            for its rich biodiversity including the famous Royal Bengal Tigers.
            It's also a UNESCO World Heritage Site.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What's the significance of Borobudur Temple in Indonesia?
        </div>
        <div className="collapse-content">
          <p>
            Borobudur is the largest Buddhist temple in the world and is
            renowned for its intricate design and historical importance. It's a
            UNESCO World Heritage Site attracting pilgrims and tourists alike.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Why is Langkawi in Malaysia a popular destination?
        </div>
        <div className="collapse-content">
          <p>
            Langkawi is famous for its stunning beaches, clear waters, and lush
            landscapes. It's also a duty-free island, making it attractive for
            shopping, relaxation, and water sports.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What makes Ha Long Bay in Vietnam a must-visit destination?
        </div>
        <div className="collapse-content">
          <p>
            Ha Long Bay is known for its emerald waters and thousands of
            towering limestone islands topped with rainforests. It's a UNESCO
            World Heritage Site and one of the New Seven Natural Wonders of the
            World.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What sets Bangkok apart from other cities in Thailand?
        </div>
        <div className="collapse-content">
          <p>
            Bangkok is Thailand's vibrant capital known for its ornate shrines,
            bustling street markets, and vibrant nightlife. It seamlessly blends
            modernity with tradition, offering visitors a diverse range of
            experiences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What makes Angkor Wat in Cambodia a marvel of architecture?
        </div>
        <div className="collapse-content">
          <p>
            Angkor Wat is the largest religious monument in the world and a
            symbol of Cambodia's rich history and culture. Its intricate design,
            elaborate bas-reliefs, and grandeur make it a must-visit for history
            and architecture enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
