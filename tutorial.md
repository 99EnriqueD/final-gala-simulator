# tutorial
```template
let person = ""
let lung_capacity = 0
let diameter_bronchioli_mm = 0
function Control () {
    person = "person.Controle"
    lung_capacity = 6
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
    diameter_bronchioli_mm = 0.8
    IoTeach.Blow(person, lung_capacity, diameter_bronchioli_mm)
}
```
## Step 1

Welcome to the IoTeach health game simulator!
In a post-corona world, students will measure their lung capacity by blowing as hard as they can on a propeller connected to a micro:bit (the little computer on the top left of your screen).
You do not need to add or delete any programming blocks in this simulator! Later in the tutorial we will ask you to change some numbers but first we will give you some more explanation.

Let's go!


## Step 2

This simulator will give you the chance to virtually blow on a propeller connected to your virtual micro:bit.
The micro:bit will then measure the speed of the spinning propeller and plot it on a graph.
Go ahead and try this out by pressing the A button on your virtual micro:bit. 

A "show console" bar should appear underneath the micro:bit. Click on it to watch the graph of the propeller.


## Step 3 
The plot you see is of a healthy/control person blowing onto a propeller.
Let's see what this graph looks like when a person with asthma blows on to a propeller.
Do this by pressing the B button on the virtual micro:bit.
You can see both graphs at the same time by first pressing the A button (healthy) and directly afterwards the B button (asthma)

## Step 4
Notice a difference? This illustrates how the lung function of individuals can be measured!
Two parameters that affect the lung function are the ``||variables:lung_capacity||`` and ``||variables:diameter_bronchioli_mm||``.
The Lung capacity of a person is measured in Liters. This represents the total amount of air inside the lungs. 
A normal lung capacity is around 6 Liters. 
Try changing the lung capacity for the control or asthma person to 8 and see how it affects the graph!

## Step 5
The diameter_bronchioli variable is a little bit more difficult to understand. 
Perhaps you remember from secondary school that your lungs are build up out of tubes that branch out and becoming thinner and thinner until they end up in little bubbles. 
The smallest tubes are called the bronchioli. In astma these bronchioli become even thinner which makes it more difficult to breath. You can compare this to breathing to a straw. 
The normal diameter of the bronchioli is around 1 millimeter. 
Try changing the bronchioli diameter for the control or asthma person and see how it affects the graph!
Be sure to use a dot '.' instead of a comma ',' when using decimal numbers.

## Step 6
Great work, you now know the basics of the biology that IoTeach will integrate with IoT.
You can play around with the two variables some more or check out more of our booth to see all the other features of IoTeach!
If you want to program some more, try your hand at a MakeCode tutorial that is included with IoTeach [here](https://makecode.microbit.org/#tutorial:github:99enriqued/receiver-tutorial/tutorial).
