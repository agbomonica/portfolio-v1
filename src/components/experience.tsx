import { HeadingH4, HeadingSmall } from './common';

interface ExperienceProps {
  company: string;
  url?: string;
  position: string;
  duration: string;
  description: string[];
}

const Experience = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <div>
      <HeadingH4 className="text-foreground">
        {experience.position}{' '}
        {experience.url ? (
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary"
          >
            @ {experience.company}
          </a>
        ) : (
          <span className="text-secondary">@ {experience.company}</span>
        )}
      </HeadingH4>
      <HeadingSmall>{experience.duration}</HeadingSmall>

      <ul className="mt-4 list-disc pl-6">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export { Experience };
