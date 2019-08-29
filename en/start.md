---
title: Start Discovery View
---

<h1>Start Discovery View</h1>

**_Discovery View_** is a web application, to access it must use a browser with the reference link.

One of its advantages is that can work from anywhere that has internet, and the appropriate access permissions.

When the corresponding link of the **_Discovery View_** is accessed, the tool's start page will be displayed. In some cases, previously, it will need to validate the entry with the access credentials. Its appearance is as follows:

![Start screen](/en/001.jpg)

## Home page

The homepage in the **_Discovery View_** contains three differentiated sections that are: "**Main menu**", "**System overview**", "**General System Catalog**".

### Main menu

This menu is located at the top of the home page, and presents the following information:

![Start screen](/en/002.jpg)

Next, each of the components of this menu is explained:

*   **Identification of the tool "_Discovery View_"**. When you position the cursor on this part of the "**Main Menu**", it can be se the version and the last revision of the tool.
*   **System name**. "**stock2**".
*   **Home**. Return to the home page.
*   **Options**. Droplist type menu that allows navigation in the different pages of the tool, includes the following options:
    *   "**_Objects dictionary_**". This page shows a general catalog in table format with all the elements belonging to the analyzed System. It includes three sections with specific functions that will be explained throughout this manual.
    *   "**_System structure_**". This page graphically shows all the elements belonging to the analyzed System, as well as the relationships between them ("**precedences**" and "**dependencies**"). It also includes a set of tools oriented to the complete analysis of the System or specific element. All functions will be explained throughout this manual.
    *   "**_Uses cases_**". It contains a complete list of all "**Use cases**". It can be defined as "**Case of use**" in a summarized way, to the processes of a System that are oriented to a specific action. Within this page it can be make a tour in each of these, at various levels maximizing the analysis of the same.
*   **Configuration** <img src="/en/ico/001.png" width="20" height="20">. When clicking on this button, a series of switches are displayed that modify the visualization of elements in the "**System structure**" page. Next, they are explained:
    *   **Exclude files**. When activating this switch, the elements of type File (files) will not be seen.
    *   **Exclude Ile module**. System Ile modules will not be shown when this switch is activated.
    *   **Exclude External**. These items will not be seen when this switch is activated.
    *   **Init with open Clusters**. When this switch is activated, the Clusters created in the System will be displayed open.
    *   **Start empty network**. If this switch is activated, the "**System structure**" page will be displayed empty.
*   **Full screen** <img src="/en/ico/002.png" width="20" height="20">. Put the tool in full screen mode, to remove this mode will be have to press the [**Esc**] key.

### System overview

In this section, the composition of the System is shown in summary form showing the specific number of modules, programs and files that compose it. Next, its appearance is shown:

![](/en/003.jpg)

It can be see the name of the System and then you can also see the number of modules, libraries, programs, files, service programs, QSYS programs and a total of objects, which define the summary composition of the same. It is important to say that, in the lower right part, there is a green button that, when clicked, directly accesses the "**System structure**" page.

### System catalog

This section shows in more detail the distribution of the types of elements in the System, that is, the number of elements separated by type and attribute will be displayed, for example, it will be see the number of RPG programs or PF files among others.

![](/en/004.jpg)

In the lower part of this section it can be also see the average of lines of code that have been used to create the elements of the System. Next, they are mentioned:

*   **Sources lines**. Number of average total lines per element.
*   **Lines of code**. Number of average code lines per element, that is, lines with instructions or command in the creation of the element.
*   **Blank lines**. Average blank lines per element, ie empty lines in the structure of the element.
*   **Comments lines**. Lines of average comments per element, that is, lines of comments are those lines that contain the character or characters that the language recognizes as such, even if a phrase is not specified.
*   **GOTO lines**. Instructions that present a control structure in the structure of the element.
*   **Cyclomatic complexity**. This field will only be shown for the elements of program types, and refers to the number of alternatives in the program flow. It is obtained as the number of binary decisions in the program plus one. To calculate the number of binary decisions, a count is made of all instructions that present execution alternatives based on conditions: IF *, WH * (RPG), IF, MONMSG (CL), etc.
*   **Unused Routines**. Unused routines are those instructions that are not executed by the element.
*   **Unused code lines**. Average of lines of code not used, that is, lines that are not invoked by the element.

By clicking on the icon <img src="/en/ico/003.png" width="5" height="20"> located in the lower right corner of each box, a descriptive text is displayed indicating the meaning of each of them. Next, it shows:

![](/en/005.jpg)