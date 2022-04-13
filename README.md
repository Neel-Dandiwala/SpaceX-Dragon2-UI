# SpaceX Dragon 2 User Interface

![First Panel](/misc/first_panel.jpg)

This is an interactive mock-up of the SpaceX Dragon 2 spacecraft's user interface. This Vue 3 project employs WebGL, THREEJS and Javascript along with HTML & CSS.

✓ Chrome<br>
✓ Firefox<br>
✓ Opera Browser<br>
✓ Microsoft Edge<br>

There are a total of **5** panels. 



### First Panel

The main highlights of the first panels are three available views. One can toggle between the views using the `Next View` button.

![Next View](/misc/next_view.png)

### Second Panel

The second panel showcases a modest system of control to manoeuvre the spacecraft in the virtual space. The controls are as follows: 
 - MOVE <table><tr><td>W</td><td>A</td><td>S</td><td>D</td></tr></table>
 - UP | DOWN <table><tr><td>R</td><td>F</td></tr></table> 
 - ROLL<table><tr><td>Q</td><td>E</td></tr></table> 
 - PITCH<table><tr><td>🡡</td><td>🡣</td></tr></table> 
 - YAW<table><tr><td>🡠</td><td>🡢</td></tr></table> 
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

In the 'Video' sub-panel, the 'Front' option in the left menu named 'Camera' will require the user's permission to access the device's camera. This enables the user to view themselves in the SpaceX's modernistic spacesuit.  

See [Configuration Reference](https://cli.vuejs.org/config/).
