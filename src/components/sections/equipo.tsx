import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "./section-heading";
import { team } from "@/content/team";
import { sectionsCopy } from "@/content/sections";
import type { TeamMember } from "@/content/types";

/** Equipo: tarjetas de los fundadores con fortalezas y certificaciones. */
export function Equipo() {
  const copy = sectionsCopy.team;
  return (
    <section id="equipo" className="py-section lg:py-section-lg">
      <Container>
        <SectionHeading
          eyebrow={copy.eyebrow}
          heading={copy.heading}
          intro={copy.intro}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  const initial = member.name.charAt(0);
  return (
    <Card className="flex flex-col p-7">
      <div className="flex items-center gap-4">
        {/* Avatar: foto cuando exista; mientras tanto, inicial como marcador */}
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-muted font-display text-2xl font-semibold text-muted-foreground"
          >
            {initial}
          </span>
        )}
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-2.5">
        {member.strengths.map((strength) => (
          <li key={strength} className="flex items-start gap-2.5 leading-relaxed">
            <span
              aria-hidden="true"
              className="mt-2 size-2 shrink-0 rounded-[3px] bg-primary"
            />
            <span>{strength}</span>
          </li>
        ))}
      </ul>

      {member.certifications && member.certifications.length > 0 && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-sm text-muted-foreground">Certificaciones en la nube</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {member.certifications.map((cert) => (
              <Badge key={cert} variant="accent">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 pt-2">
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <LinkedInIcon /> Ver LinkedIn
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <LinkedInIcon /> LinkedIn [PENDIENTE: URL]
          </span>
        )}
      </div>
    </Card>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
