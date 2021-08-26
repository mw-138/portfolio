import MoneyCatcherThumbnail_1 from './assets/images/project_thumbnails/money_catcher_1.png';
import MoneyCatcherThumbnail_2 from './assets/images/project_thumbnails/money_catcher_2.png';
import MoneyCatcherThumbnail_3 from './assets/images/project_thumbnails/money_catcher_3.png';

import RPGClickerThumbnail_1 from './assets/images/project_thumbnails/rpg_clicker_1.png';
import RPGClickerThumbnail_2 from './assets/images/project_thumbnails/rpg_clicker_2.png';
import RPGClickerThumbnail_3 from './assets/images/project_thumbnails/rpg_clicker_3.png';
import RPGClickerThumbnail_4 from './assets/images/project_thumbnails/rpg_clicker_4.png';
// import RPGClickerVideo_1 from './assets/images/project_videos/rpg_clicker_1.mp4';

import WaveSurvivalThumbnail_1 from './assets/images/project_thumbnails/wave_survival.jpeg';
import EscapeRoomThumbnail_1 from './assets/images/project_thumbnails/escape_room_game.jpeg';
import AndroidPlatformerThumbnail_1 from './assets/images/project_thumbnails/college_android_game.jpg';
import MonogameProjectThumbnail_1 from './assets/images/project_thumbnails/monogame_project.png';
import VRShooterThumbnail_1 from './assets/images/project_thumbnails/vr_shooter_game.jpeg';
import ProceduralToolThumbnail_1 from './assets/images/project_thumbnails/procedural_tool.png';
import CLSThumbnail_1 from './assets/images/project_thumbnails/cls.jpg';

function getProjectScreenshots(project) {
  switch (project) {
    case "money_catcher":
      return [
        MoneyCatcherThumbnail_1,
        MoneyCatcherThumbnail_2,
        MoneyCatcherThumbnail_3,
      ];
    case "rpg_clicker":
      return [
        RPGClickerThumbnail_1,
        RPGClickerThumbnail_2,
        RPGClickerThumbnail_3,
        RPGClickerThumbnail_4,
      ];
    case "wave_survival":
      return [
        WaveSurvivalThumbnail_1,
      ];
    case "escape_room_game":
      return [
        EscapeRoomThumbnail_1,
      ];
    case "college_android_game":
      return [
        AndroidPlatformerThumbnail_1,
      ];
    case "monogame_project":
      return [
        MonogameProjectThumbnail_1,
      ];
    case "vr_shooter_game":
      return [
        VRShooterThumbnail_1,
      ];
    case "procedural_tool":
      return [
        ProceduralToolThumbnail_1,
      ];
    case "cls":
      return [
        CLSThumbnail_1,
      ];
    default:
      return [];
  }
}

function getProjectVideos(project) {
  switch (project) {
    case "money_catcher":
      return [
        // RPGClickerVideo_1,
      ];
    case "rpg_clicker":
      return [];
    case "wave_survival":
      return [];
    case "escape_room_game":
      return [];
    case "college_android_game":
      return [];
    case "monogame_project":
      return [];
    case "vr_shooter_game":
      return [];
    case "procedural_tool":
      return [];
    case "cls":
      return [];
    default:
      return [];
  }
}

export const projectList = [
  {
    title: "Money Catcher",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "Money Catcher is a game where you catch money falling from the sky and obtain a score as high as possible in 60 seconds.",
    link: "https://lionstargames.itch.io/money-catcher",
    screenshots: getProjectScreenshots("money_catcher"),
    videos: getProjectVideos("money_catcher"),
  },
  {
    title: "RPG Clicker",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "An RPG clicker game that includes enemies, bosses and loot. Collect loot to be able to do more damage to your enemies.",
    link: "https://lionstargames.itch.io/rpg-clicker",
    screenshots: getProjectScreenshots("rpg_clicker"),
    videos: getProjectVideos("rpg_clicker"),
  },
  {
    title: "Wave-based RPG Survival",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "This is a first-person zombie survival game created in Unity that was made for a college assignment. In this game, you fight waves of enemies whilst also being able to unlock new areas of the map, get new weapons with an RPG loot system, weapon upgrades and boss fights.",
    screenshots: getProjectScreenshots("wave_survival"),
    videos: getProjectVideos("wave_survival"),
  },
  {
    title: "Escape Room",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "This is an escape room created in Unity that was made for a college assignment. This game contains multiple rooms that the player has to figure out how to get through. Each room contains one or more puzzles in order for them to complete to advance further into the level.",
    screenshots: getProjectScreenshots("escape_room_game"),
    videos: getProjectVideos("escape_room_game"),
  },
  {
    title: "2D Platformer",
    platform: "Android",
    engine: "Unity",
    language: "C#",
    description: "This is a 2D platformer project created in Unity that was made for a college assignment. You can find your way around the level collecting coins and opening crates get loot. You are also able to rotate the entire level to access areas you would not normally be able to.",
    screenshots: getProjectScreenshots("college_android_game"),
    videos: getProjectVideos("college_android_game"),
  },
  {
    title: "Tile-based Prototype Project",
    platform: "PC",
    engine: "Monogame",
    language: "C#",
    description: "This was a prototype project made within a group of 3 (including myself) for a college assignment. (ADD MORE)",
    screenshots: getProjectScreenshots("monogame_project"),
    videos: getProjectVideos("monogame_project"),
  },
  {
    title: "VR Shooter Game",
    platform: "Oculus",
    engine: "Unity",
    language: "C#",
    description: "This is a VR shooter game created in Unity that was made for a college assignment. This game contains 3 levels in which the player has to shoot all targets to complete each level and progress further.",
    screenshots: getProjectScreenshots("vr_shooter_game"),
    videos: getProjectVideos("vr_shooter_game"),
  },
  {
    title: "Procedural Terrain Generation Tool",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "This is a Unity tool that I made for my dissertation project. This allows users to create procedurally generated terrain with foliage and textures within a couple minutes.",
    screenshots: getProjectScreenshots("procedural_tool"),
    videos: getProjectVideos("procedural_tool"),
  },
  {
    title: "Customizable Levelling System v2.0",
    platform: "PC",
    engine: "Unity",
    language: "C#",
    description: "This is a Unity package that I created and uploaded onto the Unity Asset Store. This is a levelling system that can be easily integrated into any game project.",
    link: "https://assetstore.unity.com/packages/tools/gui/customizable-levelling-system-v2-120348",
    screenshots: getProjectScreenshots("cls"),
    videos: getProjectVideos("cls"),
  },
];

export const skillList = [
  {
    title: "Languages",
    points: [
      "C++",
      "C#",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Lua",
    ]
  },
  {
    title: "Engines",
    points: [
      { label: "Unreal Engine", link: "https://www.unrealengine.com/en-US/" },
      { label: "Unity", link: "https://unity.com/" },
    ]
  },
  {
    title: "Frameworks",
    points: [
      { label: "React", link: "https://reactjs.org/" },
      { label: "Monogame", link: "https://www.monogame.net/" },
    ]
  },
  {
    title: "Tools",
    points: [
      { label: "Adobe Photoshop", link: "https://www.adobe.com/uk/products/photoshop.html" },
      { label: "Trello", link: "https://trello.com/en-GB" },
      { label: "GitHub", link: "https://github.com/" },
      { label: "Visual Studio", link: "https://visualstudio.microsoft.com/" },
    ]
  },
  {
    title: "Fields",
    points: [
      // "Procedural Generation",
      "Gameplay",
      // "Tools",
      "Scripting"
    ]
  }
];