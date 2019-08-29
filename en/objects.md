---
title: Objects dictionary
---

 <h1>Objects dictionary</h1>

The "**Objects dictionary**" page offers a complete list of all the elements of the analyzed System, where the main characteristics of each of them are shown. It has three sections called: "**System dictionary**", "**Current selection**", "**Groups**" that will be explained later in this manual.

It can be accessing this page by selecting the "**Objects dictionary**" option from the "**Options**" droplist.

<center>
<img src="/en/006.jpg" alt="" style="width:50%;">
</center>

![](/en/007.jpg)

In addition to the content of this page, it can be seen that a search box has been added to the "**Main Menu**". This "**Search box**" allows to find elements of the System by means of criteria such as: name of the element, library to which it belongs, description, type, etc.

It can also be seen that, when entering this default page, the "**System dictionary**" section is displayed, while the "**Current selection**" and "**Groups**" sections are hidden. To show these last two it must be click on the icon <img src="/en/ico/004.png" width="20" height="20"> located in the upper right corner of this section.

The Group concept, which appears on this page, is used throughout the **_Discovery View_**. It refers to a grouping of elements with common or convenience characteristics, which have been associated to be treated as a whole. An element can belong to one or more Groups.

## System dictionary

The section "**System dictionary**" shows a list in table format with information of the elements that make up the System.

The checkboxes located in the upper part of this section, allow filtering the type of element displayed in said table, these elements can be: files (_Files_), programs (_Programs_) and unresolved elements (_Unresolved_).

![](/en/008.jpg)  
The arrows to the right of the name allow alphabetizing the elements of the table.

The headings in this table mean the following:

*   **F**. Element function (Service server and Service client).
*   **Library**. Name of the library that the element belongs to.
*   **Name**. Element name.
*   **Type**. Qualification of the element, can be: programs (PGM), file (FILE), menus (MENU), etc.
*   **Attr**. According to the type (type) of the element, its characteristic is defined.
*   **Description**. Brief description of the element's function.
*   <img src="/en/ico/005.png" width="20" height="20">. When it be pressing this button <img src="/en/ico/006.png" width="20" height="20">, the items shown on the page will be sent to the "**Current selection**" section; while pressing the button sends only the corresponding element. It will be explained in detail within the "**Current selection**" section.

The navigation buttons at the bottom of the table work as follows:

*   **First**. Access the first page of the list.
*   **Previous**. Access the previous page.
*   **1..10**. They allow access to a specific page.
*   **Last**. Access the last page of the table.

### Download all objects

By clicking on the button <img src="/en/ico/007.png" width="20" height="20"> located in the upper right part of the catalog table, a file in Excel format will be downloaded with information corresponding to the elements of the System. This file is useful because it can be handled more easily by significantly improving the analysis of them. Here is an example:

![](/en/009.jpg)

As it can be seeing the information shown in the file, it changes significantly with what is presented in the section "**System dictionary**" being this the extended version. Next, the headings of this table are explained:

*   **Oid**. It is a unique identifier for the element.
*   **Library**. Name of the library that the element belongs to.
*   **Name**. Element name.
*   **Title**. Descriptive text that refers to the functionality of the element.
*   **Type**. According to its characteristics, the type of the element is shown.
*   **Attr**. Depending on the type and language of creation of the element, the attributes of the element are defined.
*   **External**. It refers to the components that, belonging to the System, are not included in a certain Subsystem, therefore they are external to this one.
*   **Tags**. The Tags are indicative that can be put to the elements to mark by examples those elements that are directed to a specific field. This field shows the Tags that the element has, it is important to say that an element can have several Tags.
*   **Sources lines**. Total number of lines used to create the element.
*   **Code lines**. Total lines or programming code.
*   **Comment lines**. All lines containing the characters that the System identifies as a comment are counted, even if there is no defined phrase afterwards.
*   **Blank lines**. Total, of blank lines in the composition of the element.
*   **Cyclomatic complexity**. This field will only be shown for the elements of program types, and refers to the number of alternatives in the program flow. It is obtained as the number of binary decisions in the program plus one. To calculate the number of binary decisions, a count is made of all instructions that present execution alternatives based on conditions: IF *, WH * (RPG), IF, MONMSG (CL), etc.
*   **Goto statements**. Goto instructions on the structure of the element.
*   **Unused lines**. Lines that are not invoked or used by the element.

## Current Selection

It is a section dedicated to the temporary transit of elements, and that is oriented to the creation, edition and visualization of Groups in the System. Various functionalities accompany it, improving and facilitating these tasks. The default section is hidden, to show it have to press the icon <img src="/en/ico/008.png" width="20" height="20">, as shown in the following image:

<center>
<img src="/en/010.jpg" alt="" style="width:50%;">
</center>

![](/en/011.jpg)

The "**Selection depth**" field, which can be seen in the upper right corner, allows to define at what level (0, 1, 2, 3, All) the relationships of the elements, ie "**precedences**" and "**dependencies**", will be imported. Next, the functionalities of the buttons in this section are explained:

*   <img src="/en/ico/009.png" width="20" height="20">. Remove the elements from the section.
*   <img src="/en/ico/010.png" width="20" height="20">. Pressing this button will import the precedence of all the selected elements, according to the defined level.
*   <img src="/en/ico/011.png" width="20" height="20">. Pressing this button will import the dependencies of all the selected elements, according to the defined level.
*   **#**. Sequence of selected elements.
*   **Lib**. Name of the library that the element belongs to.
*   **Name**. Element name.
*   **Type**. Qualification of the element, can be: programs (PGM), files (FILE), menus (MENU), etc.
*   **Attr**. According to the type (type) of element, the characteristic of the same is defined.

### Select items

As mentioned in the "**System dictionary**" section, it will be have to click on the icon <img src="/en/ico/012.png" width="20" height="20"> to send a specific element or the icon <img src="/en/ico/013.png" width="20" height="20"> to send the elements shown on the page.

![](/en/012.jpg)

As be can see, when you select items, new buttons appear that are the following:

*   <img src="/en/ico/014.png" width="20" height="20">. When pressing this button, the element will be removed from the section.
*   <img src="/en/ico/015.png" width="20" height="20">. Imports precedence of the element according to the selected level.
*   <img src="/en/ico/016.png" width="20" height="20">. Import dependencies of the element according to the selected level.
*   **Sort**. Sort alphabetically the elements according to the name of the element (Name).
*   **Clear**. Pressing this button will clean the section leaving it empty.
*   **Save a group**. This button allows to create a Group in the System, based on the selected elements. Next, it is explained in detail.

### Create Groups

As mentioned, to enable the "**Save a group**" button that allows saving Groups in the System, it is required to have elements selected in this section. Once the elements have been selected, the button must be pressed and the following pop-up page will appear:

![](/en/013.jpg)

In the pop-up page called "**Save selection**", it can be defined descriptive data of the Group, these are the following:

*   **Number of nodes**. Shows the number of elements that the Group contains.
*   **Central node**. It refers to the central element or reference to the Group.
*   **Group name**. Allows to specify the name of the Group.
*   **Description**. It allows to include a description of the Group.
*   **Tags**. This field allows to put a Tag on the Group, which will be associated to each of its elements, so that when an element is selected it will show all the Tags linked with each Group. An element can belong to several Groups.
*   **Color**. It allows to define a color to the Group, so that when the elements on the "**System structure**" page are displayed, they will be shown with the assigned color. The "**System structure**" page will be explained throughout this manual.

Once the data relating to the Group has been entered, click on the "**Save**" button, the Group being created at that moment. To cancel or close the pop-up page, click on the "**Cancel**" button.

## Groups

In this section, be can see all the Groups created in the System, it can be also execute actions such as: see the elements of each Group, delete Groups, download the information of one or all the Groups, analyze separately the rest of the System a specific Group, and load from local new Groups.

![](/en/014.jpg)

The indexes and buttons in this section will be explained below:

*   **Include frontier**. It is a check box that fulfills the function of including the boundaries of a Group when analyzing this on the "**System structure**" page.
*   <img src="/en/ico/017.png" width="20" height="20">. This button allows to download a file in Excel format with information regarding the structure of the Groups created in the System. By clicking on the icon located at the end of the name of each Group, the specific information of that Group will be downloaded.
*   <img src="/en/ico/018.png" width="20" height="20">. This button allows to upload and update the System Groups. It will be explained later.
*   <img src="/en/ico/019.png" width="20" height="20">. This button sends the elements belonging to the Group to the "**Current selection**" section.
*   <img src="/en/ico/020.png" width="20" height="20">. By clicking on this button, it be creating a Subsystem from the Group, where can analyze the rest of the Main System in isolation.
*   **#**. Number of Groups.
*   **Namer**. Group name.
*   **Nodes**. Number or elements in each Groups.
*   **C/S**. It refers to the functional role of each object, that is, "**C**" for those elements that are "Service Clients" and "**S**" for those elements that are "Service Servers". In this case, the analogy "**Client / Server**" is used in Systems for processing information, identifying elements that require data or processes from those who provide them.
*   <img src="/en/ico/021.png" width="20" height="20">. Clicking on this icon will delete the corresponding Group. It is important to say that this action cannot be undone.

### All Groups generated file

As explained, pressing the button <img src="/en/ico/022.png" width="20" height="20"> will download a file in Excel format with the detailed information of all the System Groups. It has the following appearance:

![](/en/015.jpg)

The tabs inside the box are equivalent to a Group and are named in the same way. The headings of the table mean the following:

*   **Oid**. Unique identifier (id) of the element.
*   **Library**. Name of the library that belongs to the element.
*   **Name**. Element name.
*   **Title**. Brief description of the element's function.
*   **Type**. Qualification of the element, can be: programs (PGM), files (FILE), menus (MENU), etc.
*   **Attr**. According to the type (type) of element, the characteristic of the same is defined.
*   **External**. It refers to the components that, belonging to the System, are not included in a certain Subsystem, therefore they are external to this one.
*   **Tags**. Tags associated with the element.
*   **Call level**. Depth level in reference to the main element.

To add an element to the Group, the file must be edited, each column must be filled in correctly with the information of the element, and an element can be removed by deleting the information from it. Once the modifications have been saved, it must be pressing the button <img src="/en/ico/023.png" width="20" height="20"> and choose the corresponding file. To update a Group, it is important that it is removed from the System before uploading the file, it must also be taken into account that the names of the Groups cannot be modified.

It can be restored Groups that were deleted, if this file was previously downloaded and contained information about the Group that want to restore. To do so, be must follow the same procedure, clicking on the button <img src="/en/ico/023.png" width="20" height="20"> and choosing the corresponding file.

### Independent Analysis of Subsystems

The "**Groups**" section through the button <img src="/en/ico/024.png" width="20" height="20"> allows to analyze a Group independently, generating a Subsystem corresponding to the Group, where the rest of the components of the Main System will not be shown. On the other hand, the "**Include frontier**" checkbox also allows sending those elements that represent the Group's Frontiers, that is, elements of the System that refer to elements of the Group or vice versa. The term "**Frontiers**" will be explained throughout this manual.

The navigation, functions, options and performance of the tool will remain the same, see in the following images:

![](/en/016.jpg)

![](/en/017.jpg)

It can be seen that the initial page of the Subsystem (Group) visually resembles that of the Main System, with the difference that the calculations and elements shown in it belong to it. The navigation between the pages and the options available in the menus are the same as that of the Main System.

Before creating the Subsystem, it can be select the check box "**Include frontier**" that has the functionality to also send the elements that refer or are elements referenced by elements of the Group, these are called Frontiers and are necessarily useful for making a complete analysis since these elements can generate an inconsistency in the System if want to withdraw the Group.

### Edit Group

The Groups of the System may be modified or eliminated from it. To delete a Group, it be must press the icon <img src="/en/ico/025.png" width="20" height="20"> located to the right of the name of the same, it is important to say that there is no previous message therefore the elimination is direct.

![](/en/018.jpg)

To edit a Group, click on the icon <img src="/en/ico/026.png" width="20" height="20"> on the left side of its description. By clicking on this button, the elements will be sent to the "**Current selection**" section, in this section it will be possible to add or remove elements, modify the descriptive data of the Group. Once the elements are sent to the "**Current selection**" section, the modification process is the same as the process to create a Group.

![](/en/019.jpg)