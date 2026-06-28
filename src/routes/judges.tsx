import { createFileRoute } from "@tanstack/react-router";
import SiteLayout from "@/components/SiteLayout";

export const Route = createFileRoute("/judges")({
  head: () => ({
    meta: [
      { title: "Judges | HS3MT" },
      { name: "description", content: "Meet the HS3MT panel: 3MT champions and communication experts from Oklahoma, Stanford, Kansas State, Yale, and beyond." },
      { property: "og:title", content: "HS3MT Judges" },
      { property: "og:description", content: "An accomplished panel of researchers and speech coaches." },
    ],
  }),
  component: Judges,
});

const judges = [
  {
    name: "Zainab Iyiola",
    img: "https://static.wixstatic.com/media/73558e_b4e4363056c14cfaad41513d38e28840~mv2.jpg/v1/fill/w_404,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Zainab%20Ololade%20Iyiola%20Headshot%20(1)_edite.jpg",
    title: "2025 3MT First Place at University of Oklahoma Graduate College",
    field: "Petroleum Engineering & Data Science, MS",
  },
  {
    name: "Ryan Levesque",
    img: "https://static.wixstatic.com/media/73558e_300ee9e956f9440db5a1f09d4be973fc~mv2.jpg/v1/fill/w_404,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/VAFSDTHeadshot-9838.jpg",
    title: "Veteran speechwriter & communications consultant",
    field: "Public speaking coach to national speech and debate champions",
  },
  {
    name: "Tamri Matiashvili",
    img: "https://static.wixstatic.com/media/73558e_06ef0b4040604ac29d7d3408563614e5~mv2.png/v1/crop/x_176,y_129,w_1045,h_941/fill/w_404,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-08-27%20at%209_57_21%E2%80%AFPM.png",
    title: "2025 3MT Second Place at Stanford University Graduate School",
    field: "Economics, PhD",
  },
  {
    name: "Shivaprasad Doddabematti Prakash",
    img: "https://static.wixstatic.com/media/73558e_8e9b5fc52b504853bda4e086dbc7e94c~mv2.jpg/v1/fill/w_404,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Shivaprasad.jpg",
    title: "2025 3MT First Place at Kansas State Graduate School",
    field: "Grain Science, PhD",
  },
  {
    name: "Jiawen Zhang",
    img: "https://static.wixstatic.com/media/73558e_d0269b9707a04b4fa76c3822799062e7~mv2.jpeg/v1/fill/w_404,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/73558e_d0269b9707a04b4fa76c3822799062e7~mv2.jpeg",
    title: "2025 3MT First Place at Yale Graduate School of Arts and Sciences",
    field: "Cellular and Molecular Physiology, PhD",
  },
];

function Judges() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">The Panel</div>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Meet the <span className="italic text-gradient-gold">Judges</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A panel of 3MT champions and communication experts from leading universities.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {judges.map((j) => (
            <article key={j.name} className="card-elegant overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={j.img}
                  alt={j.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground">{j.name}</h3>
                <p className="mt-2 text-sm text-gold-bright">{j.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{j.field}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
