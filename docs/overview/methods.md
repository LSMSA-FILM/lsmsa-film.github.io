---
title: Methods for Livestreaming
parent: Overview
nav_order: 4
---

 assign pros_cons_data = site.data.docs.livestreaming.overview.methods.pros_cons 

# Methods

At LSMSA, the method used to livestream typically depends on the type of event. The following methods are typically used:

1. **[TriCaster system](#tricaster-tc-mini-x-system)** (e.g. LSMSA's TC Mini X system)
2. **[OBS Studio](#obs-studio-on-laptop)** (on a student's personal laptop)
3. **[A livestream broadcaster box](#livestream-broadcaster-box)** (e.g. LSMSA's Teradek Vidiu Go)
4. **[Mobile app for a livestreaming platform](#mobile-app-for-livestreaming-platform)** (e.g. YouTube, Instagram)

This page will list the pros and cons of each method, as well as provide a brief overview on what each method entails. For more information on which method is recommended for your task, check out  include page-ref.md path="docs/livestreaming/quick-start.md" fragment="recommended-workflows" title="Recommended Workflows".

## TriCaster (TC Mini X) system

Often referred to as just the "TriCaster", this system consists of a **small desktop computer** purpose-built for livestreaming. The TriCaster runs Windows 11 bundled with custom TriCaster software, which takes over as the primary interface for the computer. The TriCaster comes with a **keyboard**, **mouse**, and a ** include page-ref.md path="docs/livestreaming/tricaster-reference/control-surface.md" title="TriCaster Mini Control Surface"**, all of which plug into the computer via USB. The TriCaster is somewhat portable, as can easily be packed into a large, padded box that has dedicated slots for all of the aforementioned hardware.

In order to run, the computer needs to be plugged into a display (via its four Mini DisplayPort ports) and—optionally—a speaker setup connected to the **audio out jack** on the front of the computer. Additionally, the computer does NOT support Wi-Fi, meaning that to connect to the Internet (required for livestreaming), you need to plug an Ethernet cable into one of the **two Ethernet ports** located on the back of the computer. The other Ethernet port can be used to connect to a private network that allows other devices to access the TriCaster's LivePanel system (described in  include page-ref.md path="docs/livestreaming/tricaster-reference/livepanel.md" title="LivePanel Reference")

For more information about the TriCaster, see  include page-ref.md path="docs/livestreaming/tricaster-reference/index.md".

**This option is best used for creating professional-looking livestreams for:**

- Assemblies
- Athletics
- Esports

 include pros_cons_table.md pros=pros_cons_data.tricaster.pros cons=pros_cons_data.tricaster.cons

## OBS Studio

[OBS Studio](https://obsproject.com/) is a free and open source software that—among other features—enables users to stream content to platforms such as YouTube, Vimeo, Instagram[^1], and even Twitch. After downloading OBS Studio from their [website](https://obsproject.com/) onto a computer (a laptop is recommended, but a PC is theoretically possible), you can set up scenes with different input sources (i.e. cameras, media images, etc.). Then, you configure the streaming key for the platform you wish to stream on. After setting up, all you need to do is open OBS and hit "Start streaming" whenever you need to livestream an event.

As of the time of writing, OBS Studio is not available and cannot be installed on school devices, so you need to use a personal laptop if you wish to use this option. Contact the [LSMSA IT department](mailto:it@lsmsa.edu) if you wish to use OBS Studio on a school device.

For more information about OBS Studio, see  include page-ref.md path="docs/livestreaming/obs-reference/index.md".

**This option is best used for quickly creating semi-professional livestreams for:**

- Assemblies
- Athletics
- Esports
- Recitals

 include pros_cons_table.md pros=pros_cons_data.obs.pros cons=pros_cons_data.obs.cons

## Livestream broadcaster box

Livestream broadcaster boxes are a plug-and-play option for immediately streaming the output of a camera directly to a plaform. It can be pre-configured with the stream key and event information, so that the only thing required is connecting a camera that can output in HDMI, NDI, or some other format that is compatible with the broadcaster box.

**This option is best used for quickly livestreaming events such as:**

- Assemblies
- Recitals

 include pros_cons_table.md pros=pros_cons_data.broadcaster_box.pros cons=pros_cons_data.broadcaster_box.cons

## Mobile app for livestreaming platform

The mobile apps for platforms like YouTube and Instagram allow users to livestream using the phone's camera. In a time crunch, this option is very quick. It may be best to have a phone stand so that the phone camera can be pointed in the correct direction.

**This option is best used for quickly livestreaming outdoor or off-site events such as:**

- Away games for Athletics
- Outdoor games for Athletics

 include pros_cons_table.md pros=pros_cons_data.mobile_app.pros cons=pros_cons_data.mobile_app.cons

---

[^1]: Streaming on Instagram using anything except the mobile app is finicky and requires special set up, and we typically don't recommended doing this. If this is really something you want to do, follow the instructions in [this Instagram help article](https://about.instagram.com/blog/spark/tips-and-tricks/instagram-live-producer).
