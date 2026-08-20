export type Lens = 'developer' | 'designer';

/**
 * Anything that isn't a still image.
 *
 * `youtube` — pass the bare video id. Autoplaying YouTube needs mute=1 as well
 *   as autoplay=1; muted alone won't start and autoplay alone gets blocked.
 * `embed`   — any other iframe: splat viewers, deployed apps, course sites.
 * `video`   — a file you host. Put it in public/video/ and use "/video/x.mp4".
 */
export type Media =
  | { kind: 'youtube'; id: string; title: string; start?: number; autoplay?: boolean; caption?: string }
  | { kind: 'embed'; src: string; title: string; aspect?: string; allow?: string; caption?: string }
  | { kind: 'video'; src: string; poster?: string; caption?: string; aspect?: string };

/** A credit line — course, advisor, collaborators, award. Optionally a link. */
export interface MetaLine {
  text: string;
  href?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Which lens(es) this project shows up under. */
  lens: Lens[];
  /** Folder under assets_web/ holding this project's images. */
  assets?: string;
  /** Filename in assets_web/thumbnail/ */
  thumb?: string;
  /** Credit block above the description. */
  meta?: MetaLine[];
  /** Body copy — one string per paragraph. */
  body?: string[];
  /** Outbound links (repos, live sites, exhibitions). */
  links?: { label: string; href: string }[];
  media?: Media[];
}

/*
 * Transcribed from 01_Reference/work.md, in that file's order.
 *
 * TWO MAPPINGS I'M NOT SURE OF — check these:
 *  - `empathy-in-point-clouds` is what your earlier list called "Scan Work
 *    Selection" (it's the LiDAR/photogrammetry group). Thumb could be EIPC.png
 *    or lidar.jpg; I used EIPC.png.
 *  - `us-embassy-london` is what your earlier list called "Wood Working" — it's
 *    the basswood facade model. I've pointed it at the wood_workin image folder
 *    and glass-pavillion.png. If wood_workin is actually a separate project,
 *    say so and I'll split it back out.
 *
 * Unclaimed thumbnails: minga.png, Minga_4.png, sheep.png, vase2.jpg, chair.jpg.
 */
export const projects: Project[] = [
  {
    slug: 'nasa-suits-gain-ai',
    title: 'GAIN AI',
    lens: ['developer'],
    assets: 'NASA_suits',
    thumb: 'nasa.png',
    meta: [
      { text: 'NASA SUITS Design Challenge Winner Project' },
      { text: '10/25 – present' },
    ],
    body: [
      'GAIN AI is a project developed by a team of MIT students as part of the NASA Spacesuit User Interface Technologies for Students (NASA SUITS) design challenge. As a member of the software team, I was responsible for developing and integrating an AI agent into the system, building a real-time telemetry pipeline that reads live EVA and rover data from a TSS server, and connecting it to a large language model to enable intelligent, context-aware assistance for astronauts during extravehicular activities. The system supports multimodal interaction, combining live telemetry data with voice control and vision grounder to allow astronauts to query and receive mission-critical information hands-free, in the field.',
    ],
    media: [
      { kind: 'youtube', id: 's842ibIC3Ds', title: 'GAIN AI — NASA SUITS', start: 1, autoplay: true },
    ],
  },
  {
    slug: 'multimodal-scene-representation-learning',
    title: 'Multimodal Scene Representation Learning for Spatial and Temporal Understanding in Video',
    lens: ['developer'],
    meta: [{ text: 'Deniz Erus, Yijiang Liu, Qilmeg Doudatcz' }],
    links: [
      { label: 'project site', href: 'https://chillmeg.github.io/25FA_MIT_67960_DL/' },
    ],
  },
  {
    slug: 'gaussian-splatting-selection',
    title: 'Gaussian Splatting Projects Selection',
    lens: ['developer'],
    thumb: '3dgs.png',
    meta: [
      { text: 'MIT 4.566 Advanced Digital Media' },
      { text: 'Advisor: Takehiko Nagakura' },
      { text: '08/25 – 02/26' },
    ],
    body: [
      'Supports viewing in VR headsets. Model might take some time to load. The training pipeline is customized and developed by me — commercialized tools like LUMA, Scaniverse, Polycam, and Kiri Engine were not used.',
    ],
    media: [
      {
        kind: 'embed',
        src: 'https://chillmeg.github.io/25_3DGS_ScanHoster/scans/LUMA_gs_temple_batch_3.html',
        title: 'LUMA gs temple batch 3',
        aspect: '16 / 11',
      },
      {
        kind: 'embed',
        src: 'https://chillmeg.github.io/25_3DGS_ScanHoster/scans/ArchLounge.html',
        title: 'Arch Lounge splat',
        aspect: '16 / 11',
      },
    ],
  },
  {
    slug: 're-membering',
    title: 'Re-Membering',
    lens: ['designer', 'developer'],
    thumb: 'remembering.png',
    meta: [
      { text: 'MIT 6.9020 How to Make Almost Anything' },
      { text: '08/25 – 12/25' },
    ],
    body: [
      "Following is the webpage for my final project for the class, Re-Membering, embedded here. Scroll down to view the full content. The full website I developed for the class is linked above.",
    ],
    links: [
      {
        label: 'full HTMAA site',
        href: 'https://fab.cba.mit.edu/classes/863.25/people/QilmegDoudatcz/index.html',
      },
    ],
    media: [
      {
        kind: 'embed',
        src: 'https://fab.cba.mit.edu/classes/863.25/people/QilmegDoudatcz/projects/final_project.html',
        title: 'Re-Membering — final project',
        aspect: '16 / 11',
      },
    ],
  },
  {
    slug: 'playback-xr',
    title: 'PlaybackXR',
    lens: ['developer'],
    thumb: 'weblab.png',
    meta: [
      { text: 'MIT 6.9620 WebLab' },
      { text: 'MIT Web Lab Competition — Most Unique Concept Award Winner' },
      { text: '01/26 – 02/26' },
    ],
    body: [
      'PlaybackXR is motivated by cultural and spatial preservation in the age of emerging 3D reconstruction. Gaussian Splats can capture fragile, remote, or culturally meaningful environments with high fidelity, but these reconstructions often stay locked inside specialized viewers and file based workflows. PlaybackXR reframes splats as shared spatial artifacts by indexing them on an infinite grid that anyone can understand: claim plots, attach captures, and collectively assemble a navigable world that works on desktop and in VR using WebXR.',
      'The core UI innovation is the combination of a minimal two dimensional plot interface with immersive volumetric viewing. Each occupied plot becomes a stable spatial address for a 3D capture, lowering the cognitive barrier of 3D world building while still supporting WebXR entry for devices such as Meta Quest 3.',
    ],
    links: [
      { label: 'live site', href: 'https://playbackxr.onrender.com/' },
      { label: 'github', href: 'https://github.com/weblab-class/Chillmeg' },
    ],
    media: [
      {
        kind: 'embed',
        src: 'https://playbackxr.onrender.com/',
        title: 'PlaybackXR',
        aspect: '16 / 11',
      },
    ],
  },
  {
    slug: 'yertonts',
    title: 'Yertönts, the Vertical World',
    lens: ['designer'],
    assets: 'vertical_world',
    thumb: 'vertical.png',
    meta: [
      { text: 'Thesis Project' },
      { text: 'Advised by Professor Alina Nazmeeva' },
      { text: 'Sep 2023 – May 2024' },
      {
        text: 'Burton L. Kampner Thesis Memorial Award Winner',
        href: 'https://taubmancollege.umich.edu/students/awards/master-of-architecture-awards/',
      },
      {
        text: "RIBA President's Medals, Silver Medal category",
        href: 'https://www.presidentsmedals.com/Entry-64931',
      },
      {
        text: 'Dimensions, 2025, Vol 38, Issue 1, p80',
        href: 'https://openurl.ebsco.com/results?sid=ebsco:ocu:record&bquery=IS+1074-6536+AND+VI+38+AND+IP+1+AND+DT+2025&link_origin=www.google.com',
      },
    ],
    body: [
      "According to CNN, one-fifth of the world's more than 7,000 languages are projected to become dormant or extinct by the end of this century. Currently, approximately nine languages vanish each year, equating to one disappearing every 40 days.",
      'Traditional Mongolian is the only language in the world that’s still written vertically. Despite efforts by young Mongolian artists and programmers, smaller languages struggle to keep up with the rapidly changing contents and trends in both pop culture and academia. This leads to my thesis question: when the decay of certain cultures in the material world is unavoidable due to complex reasons, how can we preserve the culture, which is inherently a fluid entity, in another world without reducing it to just a static repository of collective memories? Conversations about digital preservation typically focus on losses during translation. However, my persistent curiosity centers on how introducing a real-world environment into the digital space can breathe life into a culture during translation between different media.',
      'In collaboration with many local Mongolians and young Mongolian musicians from Inner Mongolia, this project tries to reconstruct the circular world of one’s memory, Yertönts, in digital space and make one’s memory an interactive experience in the VR world. Religions build conceptual worlds, imagining realities that are patterned and purposefully regulated. In this project, the circular form of the world not only is linked to the meaning of the Mongolian term for memory, "ergentsüülel," which means cycling back, but also comes from the circular traditional nomadic Mongolian housing unit, the Mongolian yurt. Samsara, the fundamental concept in Buddhism that is linked to the karma theory and refers to the belief that all living beings cyclically go through births and rebirths, also serves as the main theoretical base for worlding and capturing the glitches and fuzziness of the world of memories.',
    ],
    media: [
      { kind: 'youtube', id: 'PHyLqhSx4fI', title: 'Yertönts, the Vertical World', autoplay: true },
    ],
  },
  {
    slug: 'carespace-xr',
    title: 'CareSpace XR',
    lens: ['developer', 'designer'],
    assets: 'carespace_xr',
    thumb: 'carespaceXR.png',
    meta: [
      { text: 'Academic Project' },
      { text: 'UMich Best Use of XR Research Award, 2023' },
      { text: 'Group project with Mardy Hillengas and Einas Elamin' },
      { text: 'Arch 509, Augmented Tectonics' },
      { text: 'Jan – May 2023' },
    ],
    body: [
      'CareSpace XR is a patient care room design project in collaboration with the University of Michigan School of Nursing. The project began with interviews conducted by architecture student groups with nursing student groups to explore real-life challenges that nurses commonly encounter in patient care rooms. Subsequently, we visited a patient care room at the School of Nursing, where we used Gravity Sketch for spatial documentation and ergonomic studies.',
      'We devoted considerable effort to synthesizing the information gathered from on-site AR documentation and interviews, translating these data into spatial organization problems. Next, we transferred our initial design into Arkio and conducted a virtual meeting with professors and students from the School of Nursing for a VR project review.',
      'The final design was imported into Unity, and by leveraging the latest Oculus Interaction SDK, we developed a controller-free, hand-interactable VR Patient Care Room project.',
    ],
    media: [
      { kind: 'youtube', id: '2-ghx1WQagI', title: 'CareSpace XR', start: 3, autoplay: true },
    ],
  },
  {
    slug: 'empathy-in-point-clouds',
    title: 'Empathy In Point Clouds',
    lens: ['developer', 'designer'],
    thumb: 'EIPC.png',
    meta: [
      { text: 'Visualization work selection done in an academic research group' },
      { text: 'Multidisciplinary research group led by Professor Dawn Gilpin and Professor Robert Adams' },
      { text: 'Jan 2023 – Jun 2024' },
    ],
    body: [
      'Empathy in Point-Clouds (EIPC) is a faculty-student research group that aims to redefine the parameters for creating radically accessible and inclusive architecture. Our focus spans from physical buildings and environments to digital infrastructure and urban technologies. The EIPC team leverages the 3D gaming platform, Unreal Engine, to develop project-based workflows. We create point-clouds using LiDAR scanners, photogrammetry models using Reality Capture, live performance motion-capture animation, and immersive technologies. Our goal is to embed empathy within the design process.',
      'We utilize the University of Michigan campus, faculty-designed architecture, and collaborate with institutions like The Cosanti Foundation to prototype, test, and validate complex design methodologies. These methodologies are essential for navigating equally complex and imaginative world-building processes.',
      'I serve as the research assistant and the point person for VFX development, website construction, and data visualization within the group. Additionally, I produced the presentation video for EIPC’s participation in the 2023 Taubman College TV Lab Trade Show. I have been involved in on-site scanning for various projects, including St. Mary Chapel, the University of Michigan Aerospace Engineering Wind Tunnel, Rackham Green Amphitheater, and more.',
    ],
    // Three videos: only the first autoplays. Three simultaneous YouTube
    // players is a lot of bandwidth and a lot of motion at once.
    media: [
      { kind: 'youtube', id: '5cM93TWp8kI', title: 'EIPC — reel', start: 6, autoplay: true },
      { kind: 'youtube', id: 'a3jygEN9YHA', title: 'EIPC — scan visualisation', start: 26 },
      { kind: 'youtube', id: '8O9RirchHx0', title: 'EIPC — TV Lab Trade Show', start: 22 },
    ],
  },
  {
    slug: 'stool-series',
    title: 'The Stool Series',
    lens: ['designer'],
    assets: 'stool_series',
    thumb: 'chair.jpg',
    meta: [
      { text: 'Academic Project' },
      { text: 'Arch 571: Advanced Digital Fabrication' },
      { text: 'Jan – May 2024' },
    ],
    body: [
      'Design of two stools with advanced digital fabrication methods. This project also includes a game developed for product display with Unreal Engine.',
    ],
    media: [
      { kind: 'youtube', id: 'i89b5LrXUaE', title: 'The Stool Series', start: 2, autoplay: true },
    ],
  },
  {
    slug: 'more-room-at-the-table',
    title: 'More Room at The Table',
    lens: ['designer', 'developer'],
    assets: 'mrat',
    thumb: 'mrat.jpg',
    meta: [
      { text: 'Research project led by Professors Jonathan Rule, Ana Morcillo Pallares, John McMorrough, and Julia McMorrough' },
      { text: 'Coworking research assistants: Ann Borek, Ella Edelstein, Axel Olson' },
      { text: 'XR work selection done in the academic research group' },
      { text: 'May 2023 – Apr 2024' },
      { text: 'TV Lab Exhibition', href: 'https://tvlab.org/Research_Page_More-Room-at-the-Table' },
    ],
    body: [
      'More Room at The Table is a research project that delves into the concept and history of depth, exploring various ways of perceiving and sensing spatial depth. In my role as the XR specialist for this project, my main responsibilities encompass two distinct parts. Firstly, I bring the digital models created by my coworkers into VR headsets, establishing a controller-free VR navigation experience. Secondly, I bring the assets into AR, enabling the audience to navigate through the content on their phones.',
    ],
    media: [
      { kind: 'youtube', id: 'tEMBzfBjd-Q', title: 'More Room at The Table', start: 6, autoplay: true },
    ],
  },
  {
    slug: 'simulated-assemblies',
    title: 'Simulated Assemblies Lab',
    lens: ['developer', 'designer'],
    meta: [
      { text: 'Research practice led by Professor Jose Sanchez' },
      { text: 'Sep 2024 – present' },
    ],
    body: [
      'The Simulated Collectives Lab is a think tank and design studio that studies modalities of collective engagement and their capacity to enact cultural practices. The Lab instigates different forms of assembly, examining the emergent properties of collective behavior. By staging interactive rituals, participants are invited to engage with experimental forms of collective engagement that modulate bodies and actions in space — under the premise that collective behavior should be prototyped, designed, and cultivated as much as it is inherited.',
      'The Lab proposes several tactics for researching collective prototyping, including digital reenactments, the ritualization of play, role-playing rites, and prototyping workshops. I worked as a Research Assistant for the Simulated Collectives Lab, contributing to project prototyping, game development, and concept development for exhibitions.',
    ],
    media: [
      { kind: 'youtube', id: 'IH6ZEytfc_U', title: 'Simulated Assemblies Lab', start: 2, autoplay: true },
    ],
  },
  {
    slug: 'graphic-statics',
    title: 'The Compression Only Slab Based on 3D Graphic Statics',
    lens: ['developer', 'designer'],
    assets: 'graphic_statics',
    thumb: 'graphic.png',
    meta: [
      { text: 'Academic Project' },
      { text: 'Group project with Sophia Chen' },
      { text: 'Arch 509, Computational Design' },
      { text: 'Sep 2023 – Jan 2024' },
    ],
    body: [
      'The central goal of this project is to conduct an exhaustive structural and morphological examination of an octagonal compression-only slab, which is used to simulate the force condition of slabs or towers like the Tower of Pisa, culminating in the creation of a lightweight flooring system derived from this analysis. Employing the Grasshopper plugin for 3D graphic statics, the project systematically divided the polyhedron into three subdivisions, each subject to distinct constraints. Subsequently, it generated a form diagram, a force diagram, and a resolved form diagram for each of these stages. This comprehensive exploration and computational analysis are pivotal steps towards realizing an innovative and efficient lightweight floor system rooted in the unique properties of the octagonal compression-only prism.',
    ],
  },
  {
    slug: 'multi-stable-metamaterial',
    title: 'Metamaterial Based on Multi-stable Origami Structure',
    lens: ['developer', 'designer'],
    assets: 'metamaterial',
    thumb: 'metamaterial.png',
    meta: [
      { text: 'Academic Project' },
      { text: 'Undergraduate thesis project' },
      { text: 'Southeast University Excellent Thesis of The Year award winner' },
      { text: 'Feb – Jun 2021' },
    ],
  },
  {
    slug: 'rural-bridge-house',
    title: 'The Rural Bridge House',
    lens: ['designer'],
    assets: 'rural_bridge_house',
    thumb: 'rural.png',
    meta: [
      { text: 'Academic Project' },
      { text: 'Group project with Michael Thut, Timothy Jockers' },
      { text: 'Studio professors: Jonathan Rule, Kathy Velikov' },
      { text: 'Arch 562, Collectives Studio' },
      { text: 'Jan – May 2023' },
    ],
    body: [
      "Our project aims to create a living and learning community through a set of interwoven public and private spaces. It establishes a hybridized form of collective work/life through a mixture of housing, youth education, and public engagement programming. This is aimed at attracting and retaining the younger population, both children and young adults, in Port Austin to support and enhance the town's future. For this reason, we have designed units that accommodate families, young adults, one-bedroom permanent residents, and camp groups.",
    ],
  },
  {
    slug: 'us-embassy-london',
    title: 'US Embassy London Facade Study',
    lens: ['designer'],
    assets: 'wood_workin',
    thumb: 'glass-pavillion.png',
    meta: [
      { text: 'Academic Project' },
      { text: 'Arch 552, Institution Studio' },
      { text: 'Aug 2022 – Sep 2023' },
    ],
    body: [
      "This project aims to reconstruct the facade of the new US Embassy in London using only basswood and to document and visualize the physical model using various digital media. Due to the limited information available about the embassy's structures, I utilized Grasshopper to simulate the geometry and structure of the facade. The Grasshopper simulation provided the lengths and quantities of each component.",
      "To capture the unique geometry of the facade's framework, I created 12 jigs to bend the 1/16'' basswood into the desired curvature and assembled these thin, curved members with the thicker trusses. Subsequently, the physical model was scanned using a FARO Freestyle 2 Hand Scanner and cleaned up in FARO SCENE. I also explored various visual effects (VFX) techniques for the LiDAR.",
    ],
  },
  {
    slug: 'robotic-arm-3d-printing',
    title: 'Vases by KUKA',
    lens: ['designer', 'developer'],
    assets: 'kuka',
    thumb: 'vase.jpg',
    meta: [
      { text: 'Academic Project' },
      { text: 'Arch 581, Advanced Robotics' },
      { text: 'Jan – May 2023' },
    ],
    body: [
      'This project utilizes the Super Matter Tool and KUKA Robotic Arms for the production of extruded flower vases. Starting with an initial vase model generated in Grasshopper, a series of vases were printed to assess the impact of factors such as extrusion rate, nozzle temperature, speed, carbon fiber-to-acrylic ratio, and crease pattern on print quality. Subsequently, a combination of additive and subtractive methods was employed to further refine the prints. Additionally, acrylic pallets were mixed with hand-cut PLA and PETG materials to explore possible color variations in the prints.',
    ],
  },
];

export function byLens(lens: Lens | null): Project[] {
  return projects.filter((p) => lens === null || p.lens.includes(lens));
}
