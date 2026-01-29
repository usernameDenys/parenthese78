import ActionButton from "../action-button";
import { cards } from "./cardItems";

export default function Card() {
  return (
    <div className="flex touch-pan-y">
      {cards.map((item) => (
        <div
          key={item.id}
          className="shrink-0 w-60 md:w-80  h-120 rounded-2xl p-4 py-12 flex flex-col items-center justify-between text-text bg-secondary mx-2 sm:mx-2 first:ml-4 last:mr-4 ">
          <h4 className="font-bold text-2xl py-8 text-center">{item?.title}</h4>
          <p className="pb-8 text-text text-sm">{item?.desc}</p>

          <ActionButton href={"services"} ariaLabel={"Voir plus"}>
            Voir Plus
          </ActionButton>
        </div>
      ))}
    </div>
  );
}
