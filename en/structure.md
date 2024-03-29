---
title: System structure
---

 <h1>System structure</h1>

The "**System structure**" page is the starting point of the System analysis. This page offers a graphic view of all the elements present in the System (files, programs, variables) and their relationships (to and from). A complete and easy to understand image of the entire System. From here you can download any detail.

This page also shows the structure in detail of each element, as well as the complete information of it. Depending on the type of element be can navigate between the different options that are presented. Also, in the case of file type elements, be can download all the information contained in each file, ie the records that make up that element.

Groups and Subgroups can be defined at different depth levels, which allows identifying the functional components in the data structure.

Subsystems can be identified, extracted and analyzed separately, to focus on their various characteristics and to follow specific data flows. Any of them can be identified and Tagged separately, including all appropriate metadata (owner, responsible, type, level of protection, etc.).

To access this page, select the "**System structure**" option in the "**Options**" droplist of the "**Main Menu**". Next, its appearance is shown:

<center>
<img src="/en/020.jpg" alt="" style="width:50%;">
</center>

![](/en/021.jpg)

The "**System structure**" page consists of three sections where be can execute and visualize the results of the different functionalities. Below are shown:

![](/en/022.jpg)

*   **Display Panel**. It is the central area of this section where the entire result is shown after the execution of the various functionalities offered by this page. It can be also observed information about the element or the selection of elements that will be explained later.
*   **Left Vertical Menu**. This menu contains shortcuts of the "**Main Menu**" and is also oriented to the configuration of the graph, that is, be can select from this menu the relation in which an element is related to the rest, be can also change the way in which the graph is presented, among other things that will be explained later.
*   **Main Menu**. This menu maintains all the features and functions of the "**Main Menu**" of the home page, with the difference that new droplist and menus have been added, which contain the analysis options. All will be explained later.

Next, each of the previously mentioned sections will be explained.

## Display Panel

The "**Display Panel**" is the section where the results of the execution of the various options are shown, in this section it can be see in the upper part a "**Status Bar**" that shows information about the element or the selection of elements. It also has a hidden sub-section called "**Selection Panel**" that is displayed when be click on the icon on the right side of the "**Status Bar**".

![](/en/023.jpg)

When be proceed to select one or several elements, the "**Status Bar**" shows information that refers to the selection made. There are also two buttons that allow navigation in the structure of the selected element, showing its source code and its general information, among other things. Next, the "**Status Bar**" will be explained.

### Status Bar

![](/en/024.jpg)

Next, the information shown in the "**Status Bar**" is explained in detail:

![](/en/025.jpg)

Pressing this button displays a pop-up page with the legend of all the icons that are displayed on the "**System structure**" page. It is important to say that this button will be available at any time in the "**Status Bar**" so it will not be necessary to select items. Next, the icons corresponding to this page are shown:

![](/en/026.jpg)

![](/en/027.jpg)

The "**Info**" button shows the general information of the selected item, then an example is shown:

![](/en/028.jpg)

It can be see one that presents the following information:

*   **Edges Out/In**. It refers to the number of inputs and outputs that the element has, that is, the relationships with the rest of the System. "**In**" indicates the number of elements that are referenced by the selected element (**From**) and "**Out**" indicates the number of elements that refer to the selected element (**To**).
*   **Description**. Shows the descriptive text of the operation of the element.
*   **Type**. Qualifier to which the element belongs.
*   **Attr**. A qualifier is shown according to the type and language that the element is made.
*   **Size (Bytes)**. Measures in bytes the amount of space that the element occupies in memory.
*   **Creation date**. Shows the exact date and time the item was created.
*   **Creation System**. Displays the name of the AS400 server where the item was created.
*   **Creator**. Displays the name of the user who created the item.
*   **Source lines**. Total, of lines of code that were used to create the element.
*   **Complexity**. Cyclomatic complexity of the element.

![](/en/029.jpg)

Pressing this button opens a tab in the browser where can see the entire structure of the element. An example is shown:

![](/en/030.jpg)

By means of the button <img src="/en/ico/027.png" width="20" height="20"> that is available in the right part at the end of each tab, the information contained in each one is displayed. The first tab shows the general information of the element next to the corresponding metrics, an example is shown:

![](/en/031.jpg)

In the "**Source code**" tab, all the source code of the element is detailed, while the following tabs are variable since the "**Source code**" is broken down by parts. Here is an example:

![](/en/032.jpg)

The following tabs as mentioned above are fragments of the "**Source code**" where can see in three ways shown below:

![](/en/033.jpg)

The **_Discovery View_** makes a translation of the code "**Legacy**" to "**Java Pseudocode**" and "**Flowchart**" with the intention of improving the interpretation of the element for a conversion process. This can be done with any element present in the System.

![](/en/034.jpg)

This part of the "**Status bar**" shows the name (INVO_PB) next to the item identifier (26).

![](/en/035.jpg)

The relationships that the element has with the other elements of the System are shown. "**Out**" Indicates the number of elements that refer to the selected element, they are also known as "**Dependencies**" and "**In**" Indicates the number of elements that are referenced by the selected element are also known as "**Precedencies**".

![](/en/036.jpg)

This part shows the amount of lines of code that have been used to create the element, followed by the cyclomatic complexity of the same.

![](/en/037.jpg)

It refers to the number of lines of code that have been used to create the elements and the average complexity of the entire selection of elements.

![](/en/038.jpg)

The number "**10**" refers to the number of elements selected, the next number "**104**" refers to the number of elements shown in the "**Display Panel**", after which the number "**104**" is displayed, which refers to the quantity total of elements that make up the System and finally shows the number "**12**" enclosed in brackets "**[]**" that refers to the number of "**Clusters**" created in the System.

A **Clusters** is mostly used in Systems of a certain dimension, since the high number of objects makes its use difficult. It is defined as a grouping of elements with the sole purpose of reducing the number of elements displayed, facilitating the visualization and manipulation of the System.

![](/en/039.jpg)

When clicking on this button located on the right side of the "**Toolbar**" a panel called "**Selection Panel**" is displayed where the Groups, Tags, Use Cases will be seen, among other things that will be explained later. On the other hand, this button will be available at any time.

### Selection Panel

It is a panel that as mentioned was hidden, pressing the button <img src="/en/ico/028.png" width="20" height="20"> located on the right side of the "**Status Bar**" is shown having the following appearance:

![](/en/040.jpg)

This panel contains four sections called "**Current Selection** <img src="/en/ico/029.png" width="20" height="20">", "**Groups** <img src="/en/ico/030.png" width="20" height="20">", "**Tags** <img src="/en/ico/031.png" width="20" height="20">" and "**Use Cases** <img src="/en/ico/032.png" width="20" height="20">". These sections will be explained below.

#### Current Selection

This section is similar to the one explained above on the "**Objects dictionary**" page, with the difference that it includes new features. One of these is the usability of "**Frontiers**", the creation of "**Clusters**", among others.

Each of the functions that can be executed in this section will be explained in detail.

##### Selected item

To send elements to this section, it must be selected keeping the right mouse button and passing over the desired element (s), then once the elements have been selected, the icon <img src="/en/ico/033.png" width="20" height="20"> must be pressed. Here is an example:

![](/en/041.jpg)

If it wants be to remove an item from the list, it has to click on the icon <img src="/en/ico/034.png" width="20" height="20"> located on the right side of its description. On the other hand, if it wants be to remove all the elements must be press the button <img src="/en/ico/035.png" width="20" height="20">.

##### Create Groups or Clusters

Once the elements have been selected, a group can be created where it could be in this case Group or Cluster. To do this, click on the icon <img src="/en/ico/036.png" width="20" height="20"> and a pop-up page appears that allows to enter the descriptive data of the icon. Here is an example:

![](/en/042.jpg)

As can see in the lower part of the pop-up page there are two buttons that allow the creation of the group, to create a Group it must be click on the "**Save as Group**" button and to create a Cluster it must be press the button "**Save as Cluster**".

##### Download

When clicking on this button an Excel file is downloaded with information of the elements selected in the section. This Excel file is the same as the one explained in the "**Objects dictionary**" page, for more information see in that section.

#### Groups

In this section a list is shown with all the groupings of the System, that is, Groups and Clusters. Through the different functions be can edit, download and compare. It will be explained below.

##### Edit

It can be deleting a Group or Cluster by clicking on the icon <img src="/en/ico/036.png" width="20" height="20"> on the right of the description of each one, it is important to say that the action will be direct. On the other hand, the modification of a group can be done by pressing the icon <img src="/en/ico/037.png" width="20" height="20"> that fulfills the function of transferring all the elements corresponding to the group to the "**Current selection**" section where elements can be added or removed, in the same way they can be changed the descriptive data of it.

##### Download and Upload

As in the "**Objects dictionary**" page, it can be downloading an Excel file with information on one or all of the groupings, for which the button is used <img src="/en/ico/038.png" width="20" height="20">. Likewise, once this file has been edited, it can be loaded into the System using the button <img src="/en/ico/039.png" width="20" height="20">. For more information, see the "**Objects dictionary**" page, where it talks more in detail about the upload process and the modifications that can be made.

##### Buttons Select, Or and And

These buttons are at the top of this section, each one fulfills a specific function that are explained below:

###### Select

By default, this button is activated and fulfills the function of showing the elements of a specific Group in the "**Display Panel**". If the elements of the Group are together with other elements not belonging to the Group, those elements corresponding to the Group will be highlighted according to the defined color, while the rest will be displayed in the background. Here is an example:

![](/en/043.jpg)

###### Or

Unlike the "**Select**" button, selecting this button allows to choose more than one grouping, highlighting the elements of the groupings according to the defined color. Here is an example:

![](/en/044.jpg)

###### And

Finally, this button fulfills the function of highlighting only the elements that have in common the selection of Groups, when there are no elements in common all the elements are shown in the background. Here is an example:

![](/en/045.jpg)

#### Tags

Tags are marks that are put on an element in order to differentiate the different actions of the same, an element can be associated with several Tags. The Tagging does not affect the functioning of the System since as mentioned before it is a distinctive mark.

The process to create a Tag is done from the "**Save selection**" pop-up page of the Groups creation, where there is a field that allows to put a Tag. If the Tag already exists it will be updated by associating the new elements, while if it does not exist it will be created at the moment. In this section it can be see the list of Tags created in the System, it can be also performed functions that will be explained below.

##### Download

It can be downloaded through the button <img src="/en/ico/040.png" width="20" height="20"> functionality that once clicked automatically downloads a file in Excel format that contains information of the Tags created in the System. As in the "**Groups**" section, be can download the information of a specific tag so it must be pressing the button <img src="/en/ico/041.png" width="20" height="20"> that is located on the right side of the description of the same. Here is an example:

![](/en/046.jpg)

As it can be see when downloading the information of all the Tags, different tabs with the name of each one that contains the information of the elements that are associated to it are shown in the document. The headings in this table refer to the following:

*   **Oid**. It is the code used to identify the element in the System, there will not be two elements with the same code.
*   **Library**. Shows the name of the library to which the element belongs.
*   **Name**. Refers to the name of the element.
*   **Title**. It is a descriptive text that refers to the functionality of the element.
*   **Type**. Qualification of the element (file or program).
*   **Attr**. Depending on the type and programming language, an attribute is assigned.

##### Statistics

The statistics of a Tag is based on the number of times the commands containing the elements in the System have been executed. The download will be made individually by tag by pressing the button <img src="/en/ico/043.png" width="20" height="20"> that is located on the right side of the description of the same. Here is an example:

![](/en/047.jpg)

The headers refer to:

*   **Name**. Name of the command or instruction contained in the elements.
*   **Percentage**. Average frequency in command invocation.
*   **Times**. Number of times the command was invoked.

As it can be see in the statistics, command names are shown and not the names of the elements, this is due to the fact that the instructions contained in the code are analyzed, thus obtaining the names of commands and the times they have been used. It can be see the average usage of each command, which when added is 100%, it is also observed how many times each command has been invoked, the command with the most times invoked having a higher average.

##### Buttons Select, Or and And

The functionality of these buttons is equal to the functionality of the "**Select**", "**Or**" and "**And**" buttons in the "**Groups**" section.

The "**Select**" button is activated by default and complies with the function of displaying the elements that belong to a Tag, selecting the "**Display Panel**". The "**Or**" button fulfills the function of sending the elements of one or more Tags to the "**Display Panel**". Finally, the "**And**" button fulfills the function of comparing two or more Tags and sending only the elements in common that have the selected Tags to the "**Display Panel**". Examples of the functionality of these functions can be seen in the "**Groups**" section.

##### Delete Tag

To remove a Tag, it must be pressing the button <img src="/en/ico/044.png" width="20" height="20"> located on the right side of the description of it. It is important to say that there will not be a confirmation message and the Tag will be deleted after pressing the button.

#### Uses Cases

A "**Use Case**" is defined as the sequence of interactions that are intended to fulfill a specific action. It is very common to encapsulate processes that are frequently used in the System / man relationship. In this section it can be observe and analyze the processes that form a "**Use case**", it is important to say that all the "**Use cases**" are elaborated by the "**_Caravel Test Maker_**" tool. Within this section it can be execute different functions that are explained below.

##### Download

Using the button <img src="/en/ico/041.png" width="20" height="20"> at the top of this section, a file in Json format will be downloaded containing information on the "**Use Cases**" of the System. Here is an example:

![](/en/048.jpg)

It can be seen that each "**Use Case**" presents the following information:

*   **Name**. It refers to the name of the "**Use case**".
*   **Description**. Descriptive text of the functionality or orientation thereof.
*   **Objects Ids**. The elements included in each "**Use Case**" are shown through the **OID**.

## Left Vertical Menu

This menu, as its name implies, is located on the left side of the "**System structure**" page and is composed of shortcuts of the "**Main Menu**" and various functions that control the way the elements are displayed in the "**Display Panel**". Next, its appearance is shown:

![](/en/049.jpg)

Each component of this section will be explained below.

### Select

It is a droplist that contains options oriented to the filtration of elements. An element can be filtered by its characteristic or operation in the System. The available options are shown below:

![](/en/050.jpg)

Each of the options shown in this droplist will be explained in detail:

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="186" valign="top">

**Name**

</td>

<td width="774" valign="top">

**Description**

</td>

<td width="186" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

**All**

</td>

<td width="257" valign="top">

The operation of this option is to select all the elements that are displayed in the "**Display Panel**". It can be activated from the "**Left vertical menu**" or from the "**Select / All nodes**" droplist of the "**Main menu**", it can also be activated with the keyboard accelerator [**Alt** + **A**]. Next, an example:

</td>

<td width="166" valign="top">

[View image](/en/051.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Start nodes**

</td>

<td width="257" valign="top">

The operation of this option is to mark the elements where the System starts, that is, where the System has the first data entry. The "**Start nodes**" are identified by being elements (or components) that call other elements, but that are not called by any. Presumably they are programs that must be activated manually and therefore entry points to the System.

It can be activated from the "**Left vertical menu**" or from the "**Select / Start nodes**" droplist of the "**Main menu**", the keyboard accelerator for this option is [**Alt** + **S**].

</td>

<td width="166" valign="top">

[View image](/en/052.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**End nodes**

</td>

<td width="257" valign="top">

The operation of this option is to mark the elements where the System ends, that is, where the System has the finalization of the data flow. Generally, the "**End nodes**" are identified as being elements (or components) that are called by other elements, but that do not call any. Presumably they are elements of type "**Files**" more commonly "**Display file**" or in some cases of type "**Programs**" that write a log or report.

It can be activated from the "**Left vertical menu**" or from the "**Select / End nodes**" droplist of the "**Main menu**", it can also be activated with the keyboard accelerator [**Alt** + **E**].

</td>

<td width="166" valign="top">

[View image](/en/053.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Orphan nodes**

</td>

<td width="257" valign="top">

The operation of this option is to mark the elements that are not used in the System. They are called "**Orphan nodes**" for lack of "**dependencies**" and "**precedences**" and are generally isolated to other elements of the System.

It can be activated from the "**Left vertical menu**" or from the "**Select / Orphan nodes**" droplist of the "**Main menu**", it can also be activated with the keyboard accelerator [**Alt** + **O**].

</td>

<td width="166" valign="top">

[View image](/en/054.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Reused nodes**

</td>

<td width="257" valign="top">

The operation of this option is to mark the elements that are frequently reused in the System. They are called "**Reused nodes**" because they have a high number of references, it should be noted that there is a functionality that allows defining a minimum reference number to consider an element such as "**Reused nodes**".

A typical case of reused elements are the low level subroutines that perform basic operations and that are invoked by a large number of programs of the System. Another frequent case are those files that, because they contain basic information, are read by a large number of programs.

It can be activated from the "**Left vertical menu**" or from the "**Select / Orphan nodes**" droplist of the "**Main menu**", also the keyboard accelerator [**Alt** + **R**].

</td>

<td width="166" valign="top">

[View image](/en/055.jpg)

</td>

</tr>

</tbody>

</table>

### Hide

It is a droplist that through its options it will be possible to make simulations being able to hide different elements and analyze the result and the reaction of the System. It should be mentioned that these options will also be available in the "**Hide**" droplist of the "**Main Menu**". Next, the options present in this droplist are explained:

![](/en/056.jpg)

Below, each of the options present in this menu is explained in detail.

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="186" valign="top">

**Name**

</td>

<td width="774" valign="top">

**Description**

</td>

<td width="186" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

**Selected node**

</td>

<td width="257" valign="top">

The operation of this option is to hide a selected item from the "**Display Panel**". To hide an element, it must be selected it by clicking on it and then activate the option "**Selected node**". It is important to say that all the options in this menu are simulations and do not eliminate the elements of the System.

</td>

<td width="166" valign="top">

[View image](/en/057.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Selection**

</td>

<td width="257" valign="top">

Unlike the first option "**Selected node**", the operation of this option allows to hide a complete selection of elements. As an example, a selection will be made by marking elements with the right mouse button and drawing a rectangle covering the elements that be want to hide.

</td>

<td width="166" valign="top">

[View image](/en/058.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Unselected**

</td>

<td width="257" valign="top">

The functionality of this option is to hide the elements that are outside a selection, that is to say that when selecting several elements and activating this option the non-selected elements will be hidden.

</td>

<td width="166" valign="top">

[View image](/en/059.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Undo hide**

</td>

<td width="257" valign="top">

The operation of this option is to show again in the "**Display Panel**" the elements that have been hidden with the previous options.

</td>

<td width="166" valign="top">

[View image](/en/060.jpg)

</td>

</tr>

</tbody>

</table>

### Files

It is a switch that allows to activate or deactivate the visualization of the elements of type "**file**" in the "**Display Panel**". Below is an example of this switch turned on:

![](/en/061.jpg)

### Programs

It is a switch that allows to activate or deactivate the visualization of the elements of type "**program**" in the "**Display Panel**". Below is an example of this switch turned on:

![](/en/062.jpg)

It is important to say that the elements shown in the "**Display Panel**" are dependent on the characteristics of the System.

### Unresolved

The "**Unresolved**" elements are characterized as being components ("**files**" and "**programs**") that do not belong to the System, but that in turn are called by elements within it, giving rise to a potential inconsistency.

Not all Systems have this type of elements. Here is an example:

![](/en/063.jpg)

### Frontiers

The "**Frontiers**" option helps to understand the relationship between a Subsystem (Group of elements) of a System and the rest of its elements.

This mechanism allows limiting which elements of a selected Group, if eliminated, would generate conflict, given that they are referenced by other components of the System. Reciprocally, some of these elements may in turn require other elements of the System, whose elimination would also generate conflict.

The "**Frontiers**" option also provides information in relation to which elements of a selected Group can be eliminated from the System without causing conflict, for lack of references to other components external to it, and not in turn, referenced by any other component.

Below is an example of the use and application of the "**Frontiers**" option, taking as a starting point the selection of elements in the "**Selection Panel**".

![](/en/064.jpg)

It is important to say that, for the correct operation of this option, the elements must be selected in the "**Current selection**" section of the "**Selection Panel**".

#### Types of elements "Frontiers"

There are different types of "**Frontiers**".

First, the elements that remain within a Subsystem and relate to elements outside it are called "**Internal**" and are represented in green.

Secondly, the elements that are located outside the Subsystem and are related to others within it are called "**External**" and are represented in red.

The elements represented in blue are objects that remain within the Subsystem and are not related to other elements external to the Subsystem. That is to say, when removed they would not generate conflicts.

On the other hand, an element that calls another is called a client ("**Client**"), while an element that is called is called a server ("**Service**").

In turn, these elements can be programs or files.

Next, the meaning of each element is indicated in relation to the different typology of "**Frontiers**" available:

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="100" valign="top">

**Icons**

</td>

<td width="186" valign="top">

**Description**

</td>

<td width="774" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

<img src="/en/ico/045.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Internal Service Program**

</td>

<td width="166" valign="top">

Program that belongs to the Subsystem and is called from an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/046.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Internal Service File**

</td>

<td width="166" valign="top">

File that belongs to the Subsystem and is called from an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/047.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Internal Client Program**

</td>

<td width="166" valign="top">

Program that belongs to the Subsystem and calls an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/048.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Internal Client File**

</td>

<td width="166" valign="top">

File that belongs to the Subsystem and calls an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/049.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Intenal Client/Service Program**

</td>

<td width="166" valign="top">

Program that belongs to the Subsystem, is called from an external object and in turn calls an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/050.png" width="50" height="50">

</td>

<td width="257" valign="top">

**Intenal Client/Service File**

</td>

<td width="166" valign="top">

File that belongs to the Subsystem, is called from an external object and in turn calls an external object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/051.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Service Program**

</td>

<td width="166" valign="top">

Program that does not belong to the Subsystem and is called by an internal object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/052.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Service File**

</td>

<td width="166" valign="top">

File that does not belong to the Subsystem and is called by an internal object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/053.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Client Program**

</td>

<td width="166" valign="top">

Program that does not belong to the Subsystem and calls an internal object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/054.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Client File**

</td>

<td width="166" valign="top">

File that does not belong to the Subsystem and calls an internal object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/055.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Client/Service Program**

</td>

<td width="166" valign="top">

Program that does not belong to the Subsystem, is called from an internal object and in turn calls an internal object.

</td>

</tr>

<tr>

<td width="143" valign="top">

<img src="/en/ico/056.png" width="50" height="50">

</td>

<td width="257" valign="top">

**External Client/Service File**

</td>

<td width="166" valign="top">

File that does not belong to the Subsystem, is called from an internal object and in turn calls an internal object.

</td>

</tr>

</tbody>

</table>

### Stabilizing

The functionality of this switch is to activate or deactivate the gravitational effects that cause the graph in the "**Display Panel**" to display in an orderly manner. However, sometimes it is necessary to deactivate these effects to fix the elements in one place. Here is an example.

![](/en/065.jpg)

### Refresh

After having executed a series of functions, the elements can be disordered, complicating the analysis of them. The operation of this button is to restart the graph shown in the "**Display Panel**" returning to the initial state.

### Selection Depth and Edge direction

By means of these selection lists it will be possible to define the level of depth and the direction that the selected element will be related to the rest of the System, that is, it allows choosing to see the dependencies or precedences of an element at different scales. Next, each one will be explained.

#### Selection Depth

It can be choose the level of depth that an element will have with the rest of the System, as mentioned this function is dependent on the defined direction. The levels that can be chosen are:

*   **0**. This level shows only the selected item.
*   **1**. In this level, the selected element plus its relation is shown.
*   **2**. The selected item is shown plus the relations of the elements of level "**1**".
*   **3**. The relationships of the selected element plus the relationships of the elements of level "**2**" are shown.
*   **All**. Relationships are displayed at all levels of all selected items.

#### Edge direction

It can be define the direction in which an element that will be selected will be related to the elements of the System, that is, be can choose between viewing the dependencies or precedences of the element. The available options are shown below.

*   **To**. When selecting this option, the elements that refer to the selected element are displayed, that is, "**Dependencies**". They are also known in the tool as outputs "**Out**".
*   **From**. When selecting this option, the elements that are referenced by the selected element are displayed, that is, "**Precedencies**". They are also known in the tool as "**In**".
*   **Both**. The "**Dependencies**" and "**Precedencies**" of the element will be displayed.

Below is an example using different configurations:

![](/en/066.jpg)

### Compress/Expand

The functionality of this button is to toggle the configuration in which the elements of the graph are displayed. The "**Compress**" mode refers to a view where the elements appear more united, whereas the "**Expand**" mode refers to a view where the elements are more separated allowing a better visualization in detail.

### Hierarchical/Network

By clicking on this button, it can be change the graphic form shown in the "**Display Panel**" having two different modes.

"**Network**" this mode is shown by default when entering the "**System structure**" page and graphically simulates a network formed from the relationships between the elements between them.

"**Hierarchical**" is a hierarchical mode that is formed from the importance of an element in the System, those elements with more importance will be shown in the upper part and in the following levels those elements with less relevance in the same.

Below is an example with both modes.

![](/en/067.jpg)

## Main Menu

The "**Main Menu**" of the "**System structure**" page adds new options in comparison to the "**Main Menu**" of the "**Home Page**", among them are:

*   **View**. It is a droplist that contains options oriented to different types of views, such as: the relative sizes of each element, increasing the selection of elements by one level, among other things.
*   **Select**. This droplist contains filtering options depending on the characteristics of the elements, that is, they can filter the elements where have the first data access, among other things.
*   **Hide**. It is a droplist that contains options that allow to hide different elements of the System.
*   **Add hiddens nodes**. It is a check box that allows to show in the "**Display Panel**" elements that are hidden. A common example of the use of this box is when access the "**System structure**" page with an empty network and want to display a Group, if this box is not checked it will be impossible to execute said action.
*   **Search**. It is a search box that returns as a result the elements that match the criteria specified in that field. Some of these criteria can be: attribute of the element, name of the element, identifier of the element (**Oid**), name of the library, etc.
*   **Configuration**. In the menu it is represented by the icon <img src="/en/ico/057.png" width="20" height="20"> and it is a pop-up page that will allow to make different configurations, such as defining the parameters to consider a rejected element, among other things.
*   **Network Configuration**. Represented by the icon <img src="/en/ico/058.png" width="20" height="20"> a pop-up page is displayed that allows to modify the gravitational effects, speed and configuration aspects in the "**Display Panel**" graphic.
*   **Full screen**. Through this button represented by the icon <img src="/en/ico/059.png" width="20" height="20"> it can be accessing the full screen mode, to exit this mode will have to press the [**Esc**] key on the keyboard.

All the components of this menu will be explained in detail in the following sections.

### View

This droplist contains options that fulfill the function of showing different types of views in the elements that are presented in the "**Display Panel**".

![](/en/068.jpg)

Next, the options of this menu will be explained.

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="186" valign="top">

**Type of view**

</td>

<td width="774" valign="top">

**Description**

</td>

<td width="186" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

**Propagate selection**

</td>

<td width="257" valign="top">

Depending on the direction ("**to**" or "**from**"), this option allows to increase the ratio of the selected element (s) by one level. The terms "**to**" (refers to elements that are called by the selected element "**precedences**") and "**from**" (refers to the elements that call the selected element "**dependencies**") are terms that will be used throughout this manual and are explained in "**Selection depth and Edge direction**". This option is activated from the droplist menu "**View**" option "**Propagate selection**".

</td>

<td width="166" valign="top">

[Normal view](/en/069.jpg)

[Activated function](/en/070.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Propagate selection (reveal hidden nodes)**

</td>

<td width="257" valign="top">

The operation of this option is similar to the previous option with the difference that when using this option, it will be possible to bring hidden elements, that is, the "**Dependencies**" or "**Precedencies**" of an element can be even if it is not in the "**Display Panel**". Here is an example:

</td>

<td width="166" valign="top">

[Normal view](/en/071.jpg)

[Activated function](/en/072.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Invert selection**

</td>

<td width="257" valign="top">

Usually when a selection of elements is made, these are highlighted in the "**Display Panel**" leaving in the background those elements that are outside of that selection. The functionality of this option is to reverse this behavior by leaving the selected elements in the background. Here is an example:

</td>

<td width="166" valign="top">

[Normal view](/en/073.jpg)

[Activated function](/en/074.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Use Selection as frontier**

</td>

<td width="257" valign="top">

The functionality of this option is to define the path traveled in the propagation of "**dependencies**" and "**precedence**". In other words, it allows to mark certain elements that are considered unnecessary, obtaining as a result the relationships of the desired elements. The elements considered as Frontiers, will be painted red. Here is an example:

</td>

<td width="166" valign="top">

[Frontiers activated](/en/121.jpg)

[No Frontiers](/en/122.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Reset Selection as frontier**

</td>

<td width="257" valign="top">

The operation of this option is to delete the mark that has been made with the option "**Use Selection as frontier**" returning to initial state.

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Show objects size**

</td>

<td width="257" valign="top">

When this option is activated, the elements of the System change from having a fixed size to having a variable size. In this case the size will be proportional to the number of lines of codes that each element contains. That is, the more lines of code the element has, the size of the icon will be proportionally larger. It can also be activated using the keyboard shortcut [**Alt** + **Z**]. Here is an example:

</td>

<td width="166" valign="top">

[Normal view](/en/075.jpg)

[Activated function](/en/076.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Show objects complexity**

</td>

<td width="257" valign="top">

When this option is activated, the elements of the System change from having a fixed size to having a variable size. In this case the size will be proportional to the cyclomatic complexity of the element. That is, the more complex the element, the size of the icon will be proportionally larger.

It is understood as cyclomatic complexity, a quantitative metric of the logical complexity of an element that goes from an ascending scale of score according to the number of instructions that they contain. For these calculations the **_Discovery View_** makes an analysis of the System, determining the cyclomatic complexity of each element. This option is activated from the droplist menu "**View**" option "**Show Objects complexity**" or with the keyboard accelerator [**Alt** + **C**]. Here is an example:

</td>

<td width="166" valign="top">

[Normal view](/en/077.jpg)

[Activated function](/en/078.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Restore image size**

</td>

<td width="257" valign="top">After having executed the above options, the elements are displayed in a variable size. The operation of this option is to restore the System elements to a fixed size. It can be also activated [**Alt** + **N**].</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Highlight selection end programs**

</td>

<td width="257" valign="top">

After selecting a series of elements, the operation of this option is to mark in a different color the elements where the relationship ends. It is important to say that the relationships are dependent on the level and direction specified. Here is an example:

</td>

<td width="166" valign="top">

[Normal view](/en/079.jpg)

[Activated function](/en/080.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Show nodes with usage information**

</td>

<td width="257" valign="top">

The functionality of this option is to mark in the "**Display Panel**" all the elements that contain information regarding the last use of it. Here is an example:

</td>

<td width="166" valign="top">

[Example](/en/081.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Open all Clusters**

</td>

<td width="257" valign="top">

As mentioned before, a Cluster is a group generated to maintain order and facilitate the visualization of the elements. The operation of this option is to open all the Clusters created in the System. It can also be activated with the keyboard accelerator [**Alt** + **0**].

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Close all Clusters**

</td>

<td width="257" valign="top">

The functionality of this option is to close all the Clusters of the System, grouping the elements in the corresponding Clusters. This option is activated from the droplist menu "**View**" option "**Close all clusters**" or with the keyboard accelerator [**Alt** + **1**]. Here is an example:

</td>

<td width="166" valign="top">

[Open Clusters](/en/082.jpg)

[Closed Clusters](/en/083.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Show Clusters size**

</td>

<td width="257" valign="top">

The functionality of this option is to graphically display the size of the icon of each "**Clusters**", being proportional to the number of elements grouped within it. This option is activated from the droplist menu "**View**" option "**Show clusters size**". Here is an example:

</td>

<td width="166" valign="top">

[System Clusters](/en/084.jpg)

[Activated Function](/en/085.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Restore Clusters size**

</td>

<td width="257" valign="top">

The functionality of this option is to return the icons of Clusters to a fixed size. By default, in the tool a variable size of each Clusters is shown. This option is activated from the droplist menu "**View**" option "**Restore clusters size**".

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Open Clusters**

</td>

<td width="257" valign="top">

The functionality of this option is to open a specific Clusters. To do this, need to mark with the mouse the desired Clusters and activate the option from the droplist menu "**View**" option "**Open clusters**" or with the keyboard accelerator [**Ctrl** + **0**]. A simpler way to execute this option is to click twice on the Clusters.

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Close Clusters**

</td>

<td width="257" valign="top">

The functionality of this option is to close a specific Clusters. To do this, need to mark an element corresponding to the desired Clusters and activate the option from the droplist menu "**View**" option "**Close clusters**" or with the keyboard accelerator [**Ctrl** + **1**]. It can also be executed by double clicking on an element corresponding to the Clusters.

</td>

<td width="166" valign="top"></td>

</tr>

</tbody>

</table>

### Select

The options available in this droplist have the function of filtering according to the characteristics of the elements in the System, for example, the elements where have the first contact with the System, the most complex elements, among others. Next, its appearance is shown:

![](/en/086.jpg)

Below, each of the options is explained in detail.

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="186" valign="top">

**Type of filter**

</td>

<td width="774" valign="top">

**Description**

</td>

<td width="186" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

**Star nodes**

</td>

<td width="257" valign="top">

The "**Start nodes**" are identified as being elements that call other elements, but are not called by any. Presumably they are programs that must be activated manually and therefore entry points to the System.

The operation of this option is to highlight all the elements that meet the aforementioned characteristics, leaving the rest of the elements in the background. It can also be executed with the keyboard accelerator [**Alt** + **S**]. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/087.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**End nodes**

</td>

<td width="257" valign="top">

Unlike the previous one, the "**End nodes**" are identified as being elements that are called by other elements, but they do not call any of them. As a main characteristic they are also identified as the end of the System, these elements tend to be more frequently of the file type (File). The functionality of this option is to mark the elements where the System has the last interaction, it can also be activated with the keyboard accelerator [**Alt** + **E**]. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/088.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**All nodes**

</td>

<td width="257" valign="top">

The functionality of this option is to select all the elements that are displayed in "**Display Panel**". This option is activated from the droplist menu "**Select**" option "**All nodes**" or with the keyboard accelerator [**Alt** + **A**].

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Orphan nodes**

</td>

<td width="257" valign="top">

The "**Orphan nodes**" or orphan elements are elements that belong to the System but are isolated from it and have no interaction with the rest of the elements. The functionality of this option is to mark all the orphaned elements of the System, it can also be activated with the keyboard accelerator [**Alt** + **O**]. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/089.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Isolated groups**

</td>

<td width="257" valign="top">

The "**Isolated groups**" or isolated groups, are small groupings that, because they have a minimal interaction with the rest of the System, are considered as such. The parameters to consider a Group as isolated, can be configured through a section of this menu that will be explained later. This option can also be activated with the keyboard accelerator [**Alt** + **I**]. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/090.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Reused nodes**

</td>

<td width="257" valign="top">

"**Reused nodes**" or rejected elements are elements that have a large reference number by other elements of the System. A typical case of reused elements is the low-level subroutines that perform basic operations and that are invoked by a large number of programs of the System. Another frequent case are those files that, because they contain basic information, are read by a large number of programs.

There is a section of the "**Main Menu**" where it can be configure the parameters to determine a rejected item, which will be explained later in this manual. The functionality of this option is to mark all the "**Reused nodes**" of the System and it can also be activated with the keyboard accelerator [**Alt** + **R**]. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/091.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Multiple dependences nodes**

</td>

<td width="257" valign="top">

"**Multiple dependences nodes**" or multidependent elements, are elements that contain a large number of dependencies. They are mostly programs that contain a high number of commands that cause them to send information to a large number of items. The configuration parameters to consider an element with such, can be done in a section of this menu that will be explained later. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/092.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Dead code**

</td>

<td width="257" valign="top">

"**Dead code**" refers to the elements that contain instructions or lines of code that have never been invoked, which makes them unnecessary giving the option to debug them. It can also be executed with the keyboard accelerator [**Alt** + **D**]. Here is an example:

When selecting one of these elements and opening its structure after pressing the "**Open**" button of the "**Status Bar**", the indication or exact line is displayed. An example is shown:

</td>

<td width="166" valign="top">

[Select element](/en/093.jpg)

[Dead Code](/en/094.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Interactive programs**

</td>

<td width="257" valign="top">

"**Interactive programs**" or interactive programs are program-type elements that have a screen as output, that is, they point to a file with "**DSPF**" attribute. For a better understanding it is recommended to have the "**File**" switch activated. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/095.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Printing programs**

</td>

<td width="257" valign="top">

"**Printing programs**" or programs of printing, are elements of type programs that have as output a file of impression, that is to say that they point to a file with attribute "**PRTF**". For better compression it is recommended to have the "**File**" switch activated. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/096.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Files using programs**

</td>

<td width="257" valign="top">

Files that use programs are programs that point to or relate to a file-type element, whether data files, printing, screen, etc. The operation of this option is to mark all the programs that have dependencies or precedences with a file type element. This option is activated from the droplist menu "**Select**" option "**File using programs**". Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/097.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Only code programs**

</td>

<td width="257" valign="top">

The programs of code, are elements of type programs that do not have any precedence or dependence with elements of type file, that is to say that it interacts only with other programs. The operation of this option is to mark these elements. It is activated from the droplist menu "**Select**" option "**Only code programs**". Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/098.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Big size nodes**

</td>

<td width="257" valign="top">

Large elements are elements that have a large number of lines of code in their composition. The operation of this option is to mark said elements, it is activated from the droplist menu "**Select**" option "**Big size nodes**". Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/099.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Complex programs**

</td>

<td width="257" valign="top">

Complex programs are programs that according to the cyclomatic complexity analysis obtain the highest score. The operation of this option is to mark all the most complex elements of the System. It is activated from the droplist menu "**Select**" option "**Complex programs**". Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/100.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Inactive programs/files**

</td>

<td width="257" valign="top">

It is considered as an inactive element, those elements that have been discontinued or have not been used by the System in a period of time. In order to define this parameter, a section is available in this menu that allows to specify a reference date, which will be explained later. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/101.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Unresolved programs/files**

</td>

<td width="257" valign="top">

"**Unresolved**" refers to the components that, not belonging to the System, are called by elements of it, giving rise to a potential inconsistency. The operation of this option is to highlight these elements in the "**Display Panel**". It is important for this option to work correctly, to have the "**Unresolved**", "**Programs**" and "**Files**" switches activated. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/102.jpg)

</td>

</tr>

</tbody>

</table>

### Hide

The options provided in this menu allow you to hide one or more elements, simulating the reaction of the System when removing these elements. It is also useful to analyze a selection of specific elements. Next, its appearance is shown:

![](/en/103.jpg)

All the options present in this menu will be explained in detail.

<table class="tablem" cellspacing="8" cellpadding="8">

<thead>

<tr>

<td width="186" valign="top">

**Option**

</td>

<td width="774" valign="top">

**Description**

</td>

<td width="186" valign="top">

**Reference**

</td>

</tr>

</thead>

<tbody>

<tr>

<td width="143" valign="top">

**Selected node**

</td>

<td width="257" valign="top">

The functionality of this option is to hide an element that has been selected or marked with the mouse, it is important to say that this option only allows to hide an element. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/104.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Selection**

</td>

<td width="257" valign="top">

When marking an element, through the functionality of this option it will be possible to hide the selected element plus its relations depending on the address, it will also be possible to hide the selection made after marking with the right mouse button several elements. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/105.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Unselected**

</td>

<td width="257" valign="top">

The functionality of this option is to hide the elements that are outside a selection, that is to say that when selecting several elements and activating this option the non-selected elements will be hidden. Here is an example:

</td>

<td width="166" valign="top">

[View image](/en/106.jpg)

</td>

</tr>

<tr>

<td width="143" valign="top">

**Hide selection (permanently)**

</td>

<td width="257" valign="top">

When marking an element, through the functionality of this option it will be possible to hide the selected element plus its relations depending on the address, it will also be possible to hide the selection made after marking with the right mouse button several elements. This option differs with respect to the functionality of the "**Selection**" option since the affected elements cannot be seen in the "**Display Panel**" unless the "**Unhide permanently hidden nodes**" option of this menu is executed.

This option is very useful at the moment of identifying a module of the System and wanting to propagate its relations, since when selecting elements not belonging to the module and executing this option, these elements will not be shown again, leaving the elements of interest.

</td>

<td width="166" valign="top"></td>

</tr>

<tr>

<td width="143" valign="top">

**Unhide permanently hidden nodes**

</td>

<td width="257" valign="top">

It has as functionality to deactivate the option "**Hide selection (permanently)**" that as mentioned before its functionality is to hide elements permanently, allowing to show again in the "**Display Panel**" the affected elements.

</td>

<td width="166" valign="top"></td>

</tr>

</tbody>

</table>

### Add hidden ndoes

It is a check box that has functionality to be checked, bring to the "**Display Panel**" elements that are hidden. This functionality is very important when start with an empty network, that is, without elements, and want to analyze a Group or certain specific elements. Here is an example:

![](/en/107.jpg)

In this first image it can be see that the check box is unchecked which does not allow to add hidden elements. After selecting the Group "**G1**" no element is displayed.

![](/en/108.jpg)

In this image it can be see that the check box is checked allowing to add hidden elements. After selecting the Group "**G1**" again, it can be seen that the elements corresponding to this Group have been revealed in the "**Display Panel**".

### Search box

This table allows to search for elements by means of criteria such as element name, element type, element attribute, element identifier (**OId**), name of the library that belongs to an element, among others, returning all the incidents as a result found. Below are examples:

![](/en/109.jpg)

In this first example, a search has been carried out using the element's identifier as criteria, since it is a unique number for each element.

For the second example, an empty network will be taken as a reference, that is, all the elements will be hidden. Activating the "**Add hidden nodes**" checkbox explained above and setting the element identification number back, returns the revelation of that element in the "**Display Panel**" as a result. It is important to say that the check box must be activated, otherwise it will not work. Next, it shows:

![](/en/110.jpg)

### Configuration

When the icon <img src="/en/ico/057.png" width="20" height="20"> is clicked, a pop-up page will appear where it will be possible to make various configurations that refer to the parameters that take some of the options explained above. Next, its appearance is shown:

![](/en/111.jpg)

#### Show library in Objects names

It is a switch that works when it is active to show next to the name of the element, the name of the library to which it corresponds. It is important to say that when making a modification on this page must be click on the "**Ok**" button located at the bottom of it. Here is an example:

![](/en/112.jpg)

#### Activate Context Menu

The operation of this switch to be active is to show the context menu of the tool that is activated by pressing the right mouse button.

#### Isolated node factor

In this field will be can specify a number that the "**Isolated groups**" option of the "**Main Menu**" takes as configuration parameter. All those Groups that do not comply with the minimum of relations will be considered "**Isolated groups**".

#### Reused node factor

In this field will be can specify a number that the "**Reused node**" option of the "**Main Menu**" takes as the configuration parameter. That is to say that the elements that exceed the minimum number of "**Precedencies**" will be considered "**Reused node**".

#### Multiple dependences factor

The elements that have a large number of "**Dependencies**", that is to say that they are referenced by a high number of elements, are called "**Multiple dependences nodes**". In this field it can be configure the configuration parameter to consider an element as such, it is to put a number where any element that has more "**Dependencies**" than those defined will be considered "**Multiple dependences factor**".

#### Big size node factor

In this field, the minimum number of lines that an element must have to be considered "**Big size nodes**" is defined. As mentioned in the "**Big size nodes**" section of the "**Main Menu**" the elements are large when they have a high number of lines of code.

#### Complex program factor

Depending on the number of instructions and commands that an element has in its structure, it can be more or less complex. This field will only be shown for the elements of program types, and refers to the number of alternatives in the program flow. It is obtained as the number of binary decisions in the program plus one. To calculate the number of binary decisions, a count is made of all instructions that present execution alternatives based on conditions: IF *, WH * (RPG), IF, MONMSG (CL), etc. In this field it can be specify a number as a reference to the minimum score that an item should have to be considered "**Complex programs**". To be able to visualize these elements once the parameter has been defined, the option "**Complex programs**" of the "**Main Menu**" must be selected.

#### Inactive factor

Items that have not been used in a certain period of time can be considered as inactive in the System. In this field it can be specify a date that, any element that has not been used since that date will be considered as "**Inactive programs / files**". It is important to say that the valid formats are **YYYY-MM-DD**, **YYYY-MM**, **DD/MM/YYYY** and **YYYY**. To visualize these elements once the parameter has been defined, the option "**Inactive programs / files**" of the "**Main Menu**" must be selected.

### Network Configuration

When be click on the icon <img src="/en/ico/058.png" width="20" height="20">, a pop-up page is displayed where it can be make different modifications to the network map composed of elements that are displayed in the "**Display Panel**". It can be change the type of transition, the shape of the arrows, the speed of movement, among others. Next, its appearance is shown:

![](/en/113.jpg)