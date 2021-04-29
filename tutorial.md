# tutorial
```template
let person = ""
let lung_capacity = 0
let diameter_bronchioli_mm = 0
function Control () {
    person = "person.Controle"
    lung_capacity = 6
    diameter_bronchioli_mm = 1
    IoTeach.Blow()
}
input.onButtonPressed(Button.A, function () {
    Control()
})
input.onButtonPressed(Button.B, function () {
    Asthma()
})
function Asthma () {
    person = "person.Asthma"
    lung_capacity = 8
    diameter_bronchioli_mm = 1.3
    IoTeach.Blow()
}
```
## Step 1

Welcome to the IoTeach health game simulator!
In a post-corona world, students will measure their lung capacity using propellers connected to micro:bits which are programmed in MakeCode.
If you haven't done so yet and are new to MakeCode, try our tutorial by clicking [here](https://makecode.microbit.org/#tutorial:github:99enriqued/final-gala-tutorial/tutorial).
You do not need to add any programming blocks in this simulator!
Let's go!

## Step 2

This simulator will give you the chance to virtually blow on a propeller connected to your virtual micro:bit.
The micro:bit will then measure the voltage produced from the spinning propeller and plot it on a graph.
Go ahead and try this out by pressing the A button on your virtual micro:bit. 

A "show console" bar should appear underneath the micro:bit. Click on it to watch the plot of the propeller's produced voltage.

## Step 3 
The plot you see is of a healthy/control person blowing onto a propeller.
Let's see what this plot looks like when a person with asthma blows on to a propeller.
Do this by pressing the B button on the virtual micro:bit.

## Step 4
Notice a difference? This is exactly how breathing ability of individuals can be measured!
Two parameters that affect the breathing ability are the ``||variables:lung_capacity||`` and ``||variables:diameter_bronchioli_mm||``.
Try changing these variables for the control or asthma person and see how it affects the plot!

## Step 5
Great work, you now know the basics of the biology our product IoTeach will integrate with IoT.

Be sure to check out our booth to see all the other features of IoTeach!
If you want to program some more, try your hand at a MakeCode tutorial that is included with IoTeach [here](https://makecode.microbit.org/#tutorial:github:99enriqued/receiver-tutorial/tutorial).
