export type Lens = 'developer' | 'designer';
export type Section = 'work' | 'research';

export interface Project {
  slug: string;
  title: string;
  section: Section;
  /** Which lens(es) this project shows up under. Most sit in both. */
  lens: Lens[];
  year?: string;
  blurb?: string;
}

/*
 * QILMEG — the `section` and `lens` values below are my guesses from the
 * titles alone. Correct them freely; this file is the single source of truth
 * for both the Work/Research split and the developer/designer filter, so
 * editing here changes every page at once.
 *
 * Rule of thumb I used: `research` = the output is a finding or a method,
 * `work` = the output is a made thing.
 */
export const projects: Project[] = [
  {
    slug: 'nasa-suits-gain-ai',
    title: 'NASA SUITS GAIN_AI',
    section: 'work',
    lens: ['developer', 'designer'],
  },
  {
    slug: 'multimodal-scene-representation-learning',
    title: 'Multimodal Scene Representation Learning',
    section: 'research',
    lens: ['developer'],
  },
  {
    slug: 'gaussian-splatting-selection',
    title: 'Gaussian Splatting Selection',
    section: 'research',
    lens: ['developer'],
  },
  {
    slug: 're-membering',
    title: 'Re-Membering (HTMAA)',
    section: 'work',
    lens: ['designer', 'developer'],
  },
  {
    slug: 'playback-xr',
    title: 'PlaybackXR (WebLab)',
    section: 'work',
    lens: ['developer'],
  },
  {
    slug: 'yertonts',
    title: 'Yertönts, the Vertical World',
    section: 'work',
    lens: ['designer'],
  },
  {
    slug: 'carespace-xr',
    title: 'CareSpaceXR (UMich XR Summit)',
    section: 'work',
    lens: ['developer', 'designer'],
  },
  {
    slug: 'scan-work-selection',
    title: 'Scan Work Selection',
    section: 'work',
    lens: ['designer', 'developer'],
  },
  {
    slug: 'stool-series',
    title: 'Stool Series',
    section: 'work',
    lens: ['designer'],
  },
  {
    slug: 'more-room-at-the-table',
    title: 'More Room at the Table',
    section: 'work',
    lens: ['designer'],
  },
  {
    slug: 'simulated-assemblies',
    title: 'Simulated Assemblies',
    section: 'research',
    lens: ['developer', 'designer'],
  },
  {
    slug: 'graphic-statics',
    title: 'Graphic Statics',
    section: 'research',
    lens: ['developer', 'designer'],
  },
  {
    slug: 'multi-stable-metamaterial',
    title: 'Multi-Stable Metamaterial',
    section: 'research',
    lens: ['developer', 'designer'],
  },
  {
    slug: 'rural-bridge-house',
    title: 'Rural Bridge House',
    section: 'work',
    lens: ['designer'],
  },
  {
    slug: 'wood-working',
    title: 'Wood Working',
    section: 'work',
    lens: ['designer'],
  },
  {
    slug: 'robotic-arm-3d-printing',
    title: 'Robotic Arm 3D Printing',
    section: 'work',
    lens: ['designer', 'developer'],
  },
];

export function byLens(section: Section, lens: Lens | null): Project[] {
  return projects.filter(
    (p) => p.section === section && (lens === null || p.lens.includes(lens)),
  );
}
