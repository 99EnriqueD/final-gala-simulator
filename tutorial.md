# tutorial
```template
let person = ""
let lung_capacity = 0
let diameter_bronchioli_mm = 0
function Control () {
    person = "person.Controle"
    lung_capacity = 8
    diameter_bronchioli_mm = 1
    IoTeach.Blow(person, lung_capacity, diameter_bronchioli_mm)
}
input.onButtonPressed(Button.A, function () {
    Control()
})
input.onButtonPressed(Button.B, function () {
    Asthma()
})
function Asthma () {
    person = "person.Asthma"
    lung_capacity = 6
    diameter_bronchioli_mm = 1.3
    IoTeach.Blow(person, lung_capacity, diameter_bronchioli_mm)
}
```
## Step 1

Welcome to the IoTeach health game simulator!
In a post-corona world, students will measure their lung capacity by blowing as hard as they can on a propeller connected to a micro:bit (the little computer on the top left of your screen).
You do not need change the programming blocks in this simulator! But if you are new to MakeCode and want to try it out, Try our tutorial by clicking [here](https://makecode.microbit.org/#tutorial:github:99enriqued/final-gala-tutorial/tutorial).

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
Notice a difference? This is exactly how the lung function of individuals can be measured!
Two parameters that affect the lung function are the ``||variables:lung_capacity||`` and ``||variables:diameter_bronchioli_mm||``.
The Lung capacity of a person is measured in Liters. This represents the total amount of air inside the lungs. 
The normal lung capacity is around 6 Liters. 
Try changing the lung capacity for the control or asthma person and see how it affects the plot!

## Step 5
The diameter_bronchili variable is a little bit more difficult to understand. 
Perhaps you remember from secondary school that your lungs are build up out of tubes that branch out and becoming smaller and smaller until they end up in little bubbles. 
The smallest tubes are called the bronchioli. In astma these bronchioli become thinner which makes it more difficult to breath. You can compare this to breathing to a straw. 
The normal diameter of the bronchioli is around 1 millimeter. 
Try changing the bronchioli diameter for the control or asthma person and see how it affects the plot!

## Step 6
Great work, you now know the basics of the biology that IoTeach will integrate with IoT.

Be sure to check out our booth to see all the other features of IoTeach!
If you want to program some more, try your hand at a MakeCode tutorial that is included with IoTeach [here](https://makecode.microbit.org/#tutorial:github:99enriqued/receiver-tutorial/tutorial).
