import ActionButton from "../action-button";

const categories = [
  {
    id: 1,
    title: "Pour la femme",
    desc: "Accompagner et soulager les différentes étapes du parcours féminin, avec douceur et écoute.",
    icon: "✦",
  },
  {
    id: 2,
    title: "Pour bébé",
    desc: "Accueillir, apaiser et offrir un moment de bien-être à votre bébé dans ses premiers instants de vie.",
    icon: "✦",
  },
  {
    id: 3,
    title: "Pour les parents",
    desc: "Soutenir, rassurer et vous aider à prendre confiance dans votre nouveau rôle.",
    icon: "✦",
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="font-bold my-10 text-5xl md:text-6xl lg:text-7xl text-center">
        Soins et ateliers pour bébé, enfant et parents
      </h2>
      <p className="w-full md:w-1/2 text-center text-muted-foreground mb-12">
        De la naissance aux premières années, et tout au long de la maternité,
        je vous accompagne avec des parenthese de douceur à vivre ou à offrir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col gap-4 p-8 rounded-2xl bg-secondary">
            <span className="text-primary text-2xl">{cat.icon}</span>
            <h3 className="font-bold text-xl text-primary">{cat.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-10 sm:flex-row sm:gap-4 w-full sm:w-auto">
        <ActionButton href="/services" ariaLabel="Découvrir les soins proposés">
          Découvrir les soins
        </ActionButton>
        <ActionButton
          href="/offrir"
          ariaLabel="Offrir une parenthèse en cadeau"
          variant="outline">
          Offrir une parenthèse
        </ActionButton>
      </div>
    </div>
  );
}
