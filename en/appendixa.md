---
title: Appendix A. Concepts and Terms used
---

 <h1>Appendix A. Concepts and Terms used</h1>


Throughout this manual words and terms with specific meaning have been used for it, for this a table has been made with the words used and their meaning.

<table class="tablem" cellpadding="8" cellspacing="8">

<thead>

<tr>

<td width="186">

**Term**

</td>

<td width="774">

**Description**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="166">

**File**

</td>

<td width="454">

Data container objects.

</td>

</tr>

<tr>

<td width="166">

**Programs**

</td>

<td width="454">

Executable elements that can be of different classes: COBOL, RPG, CL, etc.

</td>

</tr>

<tr>

<td width="166">

**Unresolved**

</td>

<td width="454">

It refers to the components that, not belonging to the System, are called by elements of it, giving rise to a potential inconsistency.

</td>

</tr>

<tr>

<td width="166">

**Lib. (Library)**

</td>

<td width="454">

Data sources that use certain elements to function.

</td>

</tr>

<tr>

<td width="166">

**Name**

</td>

<td width="454">

Own name assigned to an element.

</td>

</tr>

<tr>

<td width="166">

**Type**

</td>

<td width="454">

Qualification of an element that can be of different classes: PGM (Programs), File (Files), Menus, etc.

</td>

</tr>

<tr>

<td width="166">

**Attr. (Attribute)**

</td>

<td width="454">

Characteristic of the type of the element (language used to create the element).

</td>

</tr>

<tr>

<td width="166">

**Element**

</td>

<td width="454">

Component of a System. They are basically programs and files. The programs can be of different types and written in different languages. The files, in turn, can have multiple structures and in general can be considered as data.

</td>

</tr>

<tr>

<td width="166">

**F**

</td>

<td width="454">

Function of the element in two directions: C/S.

</td>

</tr>

<tr>

<td width="166">

**C. (Service Client)**

</td>

<td width="454">

It refers to the elements that provide services outside the System, that is, machine-human relationship.

</td>

</tr>

<tr>

<td width="166">

**S. (Service Server)**

</td>

<td width="454">

It refers to the elements that provide services within the System.

</td>

</tr>

<tr>

<td width="166">

**droplist**

</td>

<td width="454">

Or droplist type menu. It is a type of control used in the menus of the tool that, when marked with the mouse, displays a set of selectable options.

</td>

</tr>

<tr>

<td width="166">

**Switch**

</td>

<td width="454">

Button that activates a function, is also known as a switch.

</td>

</tr>

<tr>

<td width="166">

**Cluster**

</td>

<td width="454">

In Systems of a certain dimension, the high number of objects makes their use difficult. A "**Cluster**" is a grouping of objects with the sole purpose of reducing the number of components displayed and facilitating the visualization and manipulation of the System.

</td>

</tr>

<tr>

<td width="166">

**Cyclomatic complexity**

</td>

<td width="454">

This field will only be shown for the elements of program types, and refers to the number of alternatives in the program flow. It is obtained as the number of binary decisions in the program plus one. To calculate the number of binary decisions, a count is made of all instructions that present execution alternatives based on conditions: IF *, WH * (RPG), IF, MONMSG (CL), etc.

</td>

</tr>

<tr>

<td width="166">

**Groups**

</td>

<td width="454">

Some sets of objects, within those that constitute a System, may have relations that advise grouping them for joint treatment or analysis. These sets, which can be defined by the user at all times, are called Groups.

A usual case is that of Groups made up of objects belonging to the same functional Subsystem.

</td>

</tr>

<tr>

<td width="166">

**Lines of code**

</td>

<td width="454">

Total, of lines that are used to create an element.

</td>

</tr>

<tr>

<td width="166">

**Line of dead code**

</td>

<td width="454">

Lines of code that are never used by the element.

</td>

</tr>

<tr>

<td width="166">

**Programming code lines**

</td>

<td width="454">

Instructions that handle the information received by the element and return the desired instruction as a result. These are used to create an element.

</td>

</tr>

<tr>

<td width="166">

**Lines GOTO**

</td>

<td width="454">

Instructions that refer to a control structure determined in the code.

</td>

</tr>

<tr>

<td width="166">

**DSPF Files**

</td>

<td width="454">

Element that ends reflecting information on the screen.

</td>

</tr>

<tr>

<td width="166">

**PRTF Files**

</td>

<td width="454">

Element that generates a print file.

</td>

</tr>

<tr>

<td width="166">

**Selection depth**

</td>

<td width="454">

Used along with Edge direction, it has the function of defining the level to which one wants to reach in the search of relations of one element with another; the levels are: 0, 1, 2, 3 and All.

</td>

</tr>

<tr>

<td width="166">

**Edge direction**

</td>

<td width="454">

It has the function of selecting the direction in which an element is related to the rest. The addresses are: to (elements that the selected element calls), from (elements that call the selected element) and both (elements related in both directions).

</td>

</tr>

<tr>

<td width="166">

**Relation**

</td>

<td width="454">

It is the link that can exist between components within the System. One component can call another or, reciprocally, be called by another. This is considered as a relationship.

</td>

</tr>

<tr>

<td width="166">

**External**

</td>

<td width="454">

It refers to the components that, belonging to the System, are not included in a certain Subsystem, therefore they are external to it.

</td>

</tr>

<tr>

<td width="166">

**Subsystem**

</td>

<td width="454">

Set of components included in a System and that have in common the realization of an isolable or identifiable function within the System.

</td>

</tr>

<tr>

<td width="166">

**System**

</td>

<td width="454">

Set of interrelated components that are oriented to a functionality. It can usually be divided into Subsystems. It can also be called Application.

</td>

</tr>

</tbody>

</table>