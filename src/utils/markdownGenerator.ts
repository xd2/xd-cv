import { ProfileData } from '../data/profile';

export function generateMarkdown(profile: ProfileData): string {
  const markdown: string[] = [];

  // Header
  markdown.push(`# ${profile.name}`);
  markdown.push(`**${profile.title}**`);
  markdown.push(`*${profile.subtitle}*`);
  markdown.push('');
  markdown.push(`📧 ${profile.email} | 📍 ${profile.location}`);
  
  if (profile.linkedin) {
    markdown.push(`🔗 [LinkedIn](${profile.linkedin})`);
  }
  if (profile.website) {
    markdown.push(`🌐 [Website](${profile.website})`);
  }
  
  markdown.push('');
  markdown.push('---');
  markdown.push('');

  // Summary
  markdown.push('## Summary');
  markdown.push(profile.summary);
  markdown.push('');

  // Experience
  markdown.push('## Professional Experience');
  markdown.push('');
  profile.experiences.forEach(exp => {
    markdown.push(`### ${exp.title} - ${exp.company}`);
    markdown.push(`*${exp.period}*`);
    markdown.push('');
    markdown.push(exp.description);
    
    if (exp.technologies && exp.technologies.length > 0) {
      markdown.push('');
      markdown.push(`**Technologies:** ${exp.technologies.join(', ')}`);
    }
    
    if (exp.url) {
      markdown.push(`**Website:** [${exp.company}](${exp.url})`);
    }
    
    markdown.push('');
  });

  // Education
  markdown.push('## Education');
  markdown.push('');
  profile.education.forEach(edu => {
    markdown.push(`### ${edu.degree}`);
    markdown.push(`**${edu.school}**`);
    if (edu.period) {
      markdown.push(`*${edu.period}*`);
    }
    if (edu.description) {
      markdown.push('');
      markdown.push(edu.description);
    }
    markdown.push('');
  });

  // Skills
  markdown.push('## Skills');
  markdown.push('');
  
  markdown.push('### Technical Skills');
  profile.skills.technical.forEach(skill => {
    markdown.push(`- **${skill.description}** - ${skill.level}`);
  });
  markdown.push('');
  
  markdown.push('### Tools & Technologies');
  profile.skills.tools.forEach(tool => {
    markdown.push(`- ${tool}`);
  });
  markdown.push('');
  
  markdown.push('### Soft Skills');
  profile.skills.soft.forEach(skill => {
    markdown.push(`- ${skill}`);
  });
  markdown.push('');

  // Languages
  if (profile.languages.length > 0) {
    markdown.push('## Languages');
    markdown.push('');
    profile.languages.forEach(lang => {
      markdown.push(`- **${lang.name}:** ${lang.level}`);
    });
    markdown.push('');
  }

  // Projects
  if (profile.projects.length > 0) {
    markdown.push('## Projects');
    markdown.push('');
    profile.projects.forEach(project => {
      markdown.push(`### ${project.name}`);
      markdown.push(project.description);
      markdown.push(`**Technologies:** ${project.technologies.join(', ')}`);
      
      if (project.link) {
        markdown.push(`**Link:** [${project.name}](${project.link})`);
      }
      if (project.github) {
        markdown.push(`**GitHub:** [Repository](${project.github})`);
      }
      markdown.push('');
    });
  }

  // Interests
  if (profile.interests.length > 0) {
    markdown.push('## Interests');
    markdown.push('');
    profile.interests.forEach(interest => {
      markdown.push(`- ${interest}`);
    });
    markdown.push('');
  }

  return markdown.join('\n');
}