# SpaceX Dragon-Crew User Interface

![First Panel](/misc/first_panel.jpg)

This is an interactive mock-up of the SpaceX Dragon 2 spacecraft's user interface. This Vue 3 project employs WebGL, THREEJS and Javascript along with HTML & CSS. There are a total of **5** panels. 

### First Panel

The main highlights of the first panels are three available views. One can toggle between the views using the `Next View` button.
![Next View](/misc/next_view.png)

### Second Panel

The second panel showcases a modest system of control to manoeuvre the spacecraft in the virtual space. The controls are as follows:  
 - WASD - Move
 - R | F - UP | DOWN
 - Q | E - ROLL
 - 🡡 | 🡣 - PITCH
 - 🡠 | 🡢 - YAW
> I have hidden a few easter eggs which share some association to the concept. 

### Third Panel

The third panel represents a segment of the SpaceX Dragon UI that consists of sub-panels. Unfortunately, I was just able to produce a couple of them, those are: 
1. Overview
2. Mech

### Fourth Panel
The fourth panel will require the user to click on the 'Start Suit Leak Check' button. 
![Start Suit Leak Check](/misc/suit_leak_check.png)
>Upon clicking the said button, the timer will start below. If interrupted by clicking on 'Halt Suit Leak Check', the timer will stop. After the completion of the timer's count, user will be redirected to a dialog box. 

### Fifth Panel
The fifth panel consists of three sub-panels:
 - Audio
 - Cabin
 - Video
In the video sub-panel, the 'Front' option in the left panel named 'Camera' will require the user's permission to access the device's camera. This enables the user to view themselves in the SpaceX's modernistic spacesuit.  

See [Configuration Reference](https://cli.vuejs.org/config/).
