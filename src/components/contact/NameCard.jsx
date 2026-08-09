import { DIRECT_CONTACTS, SOCIAL_CONTACTS } from "../../data/contacts";
import useTilt from "./useTilt";

const ROWS = [...DIRECT_CONTACTS, ...SOCIAL_CONTACTS];

function NameCard() {
  const { ref, onPointerMove, onPointerLeave } = useTilt();

  return (
    <div className="namecard-stage">
      <div
        className="namecard"
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className="namecard-head">
          <p className="namecard-name">Tyrone He</p>
          <p className="namecard-role">Software Engineer</p>
        </div>

        <dl className="namecard-rows">
          {ROWS.map(({ id, label, cardLabel, value, href }) => {
            const external = href.startsWith("http");

            return (
              <div className="namecard-row" key={id}>
                <dt className="namecard-label">{cardLabel ?? label}</dt>
                <dd className="namecard-value">
                  <a
                    className="namecard-link"
                    href={href}
                    title={value}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {value}
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}

export default NameCard;
