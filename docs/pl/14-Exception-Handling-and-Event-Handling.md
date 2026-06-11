# 14. Exception Handling and Event Handling

## Exception Handling and Event Handling
- What do we study in this chapter?
- Introduction to Exception Handling
- Exception Handling in Ada
- Exception Handling in C++
- Exception Handling in Java
- Exception Handling in Python and Ruby
- Introduction to Event Handling
- Event Handling in Java
- Event Handling in C#
- Introduction to Exception and Event Handling
- Both can occur at time that cannot be predefined
- Both are best handled with special language constructs and processes
- [Exception handling]
- HW, SW- detectable exception
- Handler
- Raising of exception
- Design issue- binding to handler, continuation, default handler, exception disabling
- Three programming language (Ada, C++, Java)
- [Event handling]
- Basic concept
- Java and C# examples

## Introduction to Exception Handling
- In a language without exception handling
- When an exception occurs, control goes to the operating system, where a message is displayed and the program is terminated
- In a language with exception handling
- Programs are allowed to trap some exceptions, thereby providing the possibility of fixing the problem and continuing

## Basic Concepts
- Many languages allow programs to trap input/output errors (including EOF)
- An exception is any unusual event, either erroneous or not, detectable by either hardware or software, that may require special processing
- The special processing that may be required after detection of an exception is called exception handling
- The exception handling code unit is called an exception handler

## Exception Handling Alternatives
- An exception is raised when its associated event occurs
- Different kinds of exceptions require different exception handlers
- A language that does not have exception handling capabilities can still define, detect, raise, and handle exceptions (user defined, software detected)
- Alternatives:
- [1] Send an auxiliary parameter or use the return value to indicate the return status of a subprogram
- [2] Pass a label parameter to all subprograms (error return is to the passed label)
- Possible only in languages that allow labels
- Can return to a different point in the caller if an exception occurs
- [3] Pass an exception handling subprogram to all subprograms
- Send a handler subprogram with every call to every subprogram

## Advantages of Built-in Exception Handling
- Error detection code is tedious to write and it clutters the program
- Exception handling encourages programmers to consider many different possible errors
- Exception propagation allows a high level of reuse of exception handling code
- Dealing with nonerroneous but unusual situations can be simplified with exception handling

## Design Issues
- How and where are exception handlers specified and what is their scope?
- How is an exception occurrence bound to an exception handler?
- How the same exception raised at different points can be bound to different handlers
- Whether to propagate the exception to some other unit and, if so, where
- Can information about the exception be passed to the handler?
- Where does execution continue, if at all, after an exception handler completes its execution? (termination vs. resumption)
- Is some form of finalization provided?
- How are user-defined exceptions specified?
- Should there be default exception handlers for programs that do not provide their own?
- Can predefined exceptions be explicitly raised?
- Are hardware-detectable errors treated as exceptions that can be handled?
- Are there any predefined exceptions?
- How can exceptions be disabled, if at all?

## Exception Handling Control Flow

## Exception Handling in Ada
- Handlers can be included in blocks or bodies of subprograms, packages, or tasks
- Gathered together in an exception clause
- Must be placed at the end of the block or unit
- Usual form of an exception clause

```ada
begin
-- the block or unit body --
exception
when exception_name1 =>
-- first handler --
when exception_name2 =>
-- second handler --
-- other handlers --
end;

```

## Binding Exceptions to Handlers
- When block or unit that raises an exception includes a handler
- Exception is statically bound to that handler
- When procedure is raised
- No handler → implicitly propagated to calling program (dynamic ancestor) until the main procedure if necessary
- Still no → terminate
- When exception is raised in a package body
- If no handler in body → propagated to declaration section
- If package happens to be a library unit → terminate
- When exception is raised at the outermost level in a task body
- If no, not propagated (too complex) (`Tasking_Error` is raised)

## Continuation
- If exception is not handled -> terminated
- Control never returns implicitly to the raising block
- Simply continues after the exception clause
- Cannot be continued or resumed
- Can retry with loop block

```ada
...
type Age_Type is range 0..125;
type Age_List_Type is array (1..4) of Age_Type;
package Age_IO is new Integer_IO (Age_Type);
use Age_IO;
Age_List : Age_List_Type;
...
begin
for Age_Count in 1..4 loop
loop -- loop for repetition when exceptions occur Except_Blk:
begin -- compound to encapsulate exception handling
Put_Line("Enter an integer in the range 0..125"); Get(Age_List(Age_Count));
exit;
exception
when Data_Error => -- Input string is not a number
Put_Line("Illegal numeric value");
Put_Line("Please try again");
when Constraint_Error => -- Input is < 0 or > 125
Put_Line("Input number is out of range");
Put_Line("Please try again");
end Except_Blk;
end loop; -- end of the infinite loop to repeat input
-- when there is an exception
end loop; -- end of for Age_Count in 1..4 loop
...

```

## Other design choices
- Default package, Standard
- `Constraint_Error`
- `Program_Error`
- `Storage_Error`
- `Tasking_Error`
- User-defined exception (explicitly raised)
- `exception_name_list : exception`
- `raise [exception_name]`
- `raise` without naming within handler → reraise the same exception
- Suspending a specified check in associated block
- `pragma Suppress(check_name)`

## Example
- [Problem] Program computes and prints a distribution of input grades by using an array of counters
- [Possible exception]
- Negative input
- Subscript range
- Code to handle invalid input grades is in its own local block → This allows the program to continue after such exceptions are handled

## Evaluation
- Several problems
- Allow propagation to outer scope that is not visible
- Not always possible to determine the origin of propagated exceptions
- Inadequacy of exception handling for tasks
- Exception handling was not extended to deal with the new constructs (OOP in Ada 95)

## Exception Handling in C++
- Added to C++ in 1990
- Design is based on that of CLU, Ada, and ML
- No predefined exceptions in C++ (other than in its standard libraries)
- Exceptions are user or library defined and explicitly raised

## Exception Handlers Form:

```cpp
try {
//code that is expected to raise an exception
}
catch (formal parameter) {
// handler code
}
...
catch (formal parameter) {
// handler code
}

```

## The catch Function
- `catch` is the name of all handlers--it is an overloaded name, so the formal parameter of each must be unique
- The formal parameter need not have a variable
- It can be simply a type name to distinguish the handler it is in from others
- The formal parameter can be used to transfer information to the handler
- The formal parameter can be an ellipsis, in which case it handles all exceptions not yet handled

## Throwing Exceptions
- Exceptions are all raised explicitly by the statement:
- `throw [expression];`
- The brackets are metasymbols
- A `throw` without an operand can only appear in a handler; when it appears, it simply re-raises the exception, which is then handled elsewhere
- The type of the expression disambiguates the intended handler
- Matching handler is done sequentially
- If any other match precedes, exact matched handler is not used

## Unhandled Exceptions
- An unhandled exception is propagated to the caller of the function in which it is raised
- This propagation continues to the main function
- If no handler is found, the default handler is called

## Continuation
- After a handler completes its execution, control flows to the first statement after the last handler in the sequence of handlers of which it is an element

## Other design choices
- All exceptions are user-defined
- The default handler, `unexpected`, simply terminates the program; `unexpected` can be redefined by the user
- Functions can list the exceptions they may raise (`int fun() throw (int, char *) { . . . }`)
- Without a specification, a function can raise any exception (the `throw` clause)
- No predefined exception
- But, standard libraries (`out_of_range`, `overflow_error`) can be used

## Evaluation
- There are no predefined exceptions
- It is odd that exceptions are not named and that hardware- and system software detectable exceptions cannot be handled
- Binding exceptions to handlers through the type of the parameter certainly does not promote readability
- Better to define classes for exceptions with meaningful names in a meaningful hierarchy

## Exception Handling in Java
- Based on that of C++, but more in line with OOP philosophy
- There is a collection of predefined exceptions (implicitly raised by JVM)
- All exceptions are objects of classes that are descendants of the `Throwable` class

## Classes of Exceptions
- The Java library includes two predefined subclasses of `Throwable` :
- `Error`
- Thrown by the Java interpreter (Java run-time system) for events such as heap overflow
- Never handled by user programs
- `Exception`
- User-defined exceptions are usually subclasses of this
- Has two predefined subclasses, `IOException` and `RuntimeException`
- (e.g., `ArrayIndexOutOfBoundsException` and `NullPointerException`)

## Java Exception Handlers
- Like those of C++, except every `catch` requires a named parameter and all parameters must be descendants of `Throwable`
- Syntax of `try` clause is exactly that of C++
- Exceptions are thrown with `throw`, as in C++, but often the `throw` includes the `new` operator to create the object, as in: `throw new MyException();`

```java
class MyException extends Exception {
public MyException() {}
public MyException(String message) {
super (message);
}
}
throw new MyException();
throw new MyException ("a message to specify the location of the error");
MyException myExceptionObject = new MyException();
throw myExceptionObject;

```

## Binding Exceptions to Handlers
- Binding an exception to a handler is simpler in Java than it is in C++
- An exception is bound to the first handler with a parameter is the same class as the thrown object or an ancestor of it
- An exception can be handled and rethrown by including a `throw` in the handler (a handler could also throw a different exception)

## Continuation
- If no handler is found in the `try` construct, the search is continued in the nearest enclosing `try` construct, etc.
- If no handler is found in the method, the exception is propagated to the method’s caller
- If no handler is found (all the way to main), the program is terminated
- To insure that all exceptions are caught, a handler can be included in any `try` construct that catches all exceptions
- Simply use an `Exception` class parameter
- Of course, it must be the last in the `try` construct

```java
catch (Exception genericObject) {
...
}

```

## Checked and Unchecked Exceptions
- The Java `throws` clause is quite different from the `throw` clause of C++
- Exceptions of class `Error` and `RuntimeException` and all of their descendants are called unchecked exceptions; all other exceptions are called checked exceptions
- Unchecked exceptions are never a concern of the compiler
- Checked exceptions that may be thrown by a method must be either:
- Listed in the `throws` clause, or
- Handled in the method
- Checking this at compile time differs from C++, in which it is done at run time

## Other Design Choices
- A method cannot declare more exceptions in its `throws` clause than the method it overrides
- A method that does not directly throw a particular exception, but calls another method that could throw that exception, must list the exception in its `throws` clause

```java
void buildDist() throws IOException {
…
in.readLine() // could throw IO exception
…
}

```
- A method that does not include a `throws` clause cannot propagate any checked exception
- In C++, function without a `throw` clause can throw any exception
- A method that calls a method that lists a particular checked exception in its `throws` clause has three alternatives for dealing with that exception:
- [1] Catch and handle the exception
- [2] Catch the exception and throw an exception that is listed in its own `throws` clause
- [3] Declare it in its `throws` clause and do not handle it

## The finally Clause
- Can appear at the end of a `try` construct
- If `try` clause throws no exceptions, the `finally` clause is executed before execution continues after the `try` construct
- Form:

```java
try {
...
}
catch (...) {
...
}
... //** More handlers finally finally
{
...
}

```
- Purpose: To specify code that is to be executed, regardless of what happens in the `try` construct
- [EX] file must be closed
- A `try` construct with a `finally` clause can be used outside exception handling
- This makes sense, of course, only if the compound statement has a `throw`, `break`, `continue`, or `return` statement

```java
try {
for (index = 0; index < 100; index++) {
…
if (…) {
return;
} //** end of if
} //** end of try clause
finally {
…
} //** end of try construct

```

## Assertions
- Statements in the program declaring a boolean expression regarding the current state of the computation
- Used for defensive programming
- When evaluated to true nothing happens
- When evaluated to false an `AssertionError` exception is thrown
- Can be disabled during runtime without program modification or recompilation
- Two forms
- `assert condition;`
- `assert condition: expression;`
- Expression is passed to the `AssertionError` constructor as a string and becomes debugging output

## Evaluation
- The types of exceptions makes more sense than in the case of C++
- Only objects that are instances of `Throwable` or some class that descends from it can be thrown
- The `throws` clause is better than that of C++ (The `throw` clause in C++ says little to the programmer)
- Method that does not include a `throws` clause cannot throw any checked exception
- The `finally` clause is often useful
- The Java interpreter throws a variety of exceptions that can be handled by user programs
- Implicitly throws predefined exceptions

## Exception Handling in Python
- Exceptions are objects; the base class is `BaseException`
- All predefined and user-defined exceptions are derived from `Exception`
- Predefined subclasses of `Exception` are `ArithmeticError` (subclasses are `OverflowError`, `ZeroDivisionError`, and `FloatingPointError`) and `LookupError` (subclasses are `IndexError` and `KeyError`)

```python
try:
# The try block
except Exception1:
# Handler for Exception1
except Exception2:
# Handler for Exception2
...
else:
# The else block (no exception is raised)
finally:
# the finally block (do it no matter what)

```
- Handlers handle the named exception plus all subclasses of that exception, so if the named exception is `Exception`, it handlers all predefined and user-defined exceptions
- Unhandled exceptions are propagated to the nearest enclosing `try` block; if no handler is found, the default handler is called
- `Raise IndexError` creates an instance
- The raised exception object can be gotten:
- `except Exception as ex_obj:`
- The `assert` statement tests its Boolean expression (first parameter) and sends its second parameter to the constructor for the exception object to be raised
- `assert test, data`

## Exception Handling in Ruby
- Exceptions are objects
- There are many predefined exceptions
- All exceptions that are user handled are either `StandardError` class or a subclass of it
- `StandardError` is derived from `Exception`, which has two methods, `message` and `backtrace`
- Exceptions can be raised with `raise`, which often has the form:
- `raise ″bad parameter″ if count == 0`
- Handlers are placed at the end of a `begin end` block of code; introduced by `rescue`

```ruby
begin
- Statements in the block
rescue
- Handler
end

```
- The block could include `else` and/or `ensure` clauses, which are like `else` and `finally` in Java
- Unlike the other languages we have discussed, in Ruby the code that raised an exception can be rerun by placing a `retry` statement at the end of the handler

## Introduction to Event Handling
- Similar to exception handling
- An event is a notification that something specific has occurred, such as a mouse click on a graphical button (user interactions)
- Through widgets
- The event handler is a segment of code that is executed in response to an event
- Event-driven programming was being used before GUIs
- There are other uses such as Web server

## Java Swing GUI Components
- `javax.swing`
- Collection of classes and interfaces include GUI components or widgets
- Text box is an object of class `JTextField`
- `JTextField name = new JTextField(32);`
- Radio button is an object of class `JRadioButton`
- `ButtonGroup payment = new ButtonGroup();`
- `JRadioButton box1 = new JRadioButton("Visa", true);`
- `JRadioButton box2 = new JRadioButton("Master Charge");`
- `payment.add(box1);`
- `payment.add(box2);`
- GUI components can be placed in a frame
- `JPanel myPanel = new JPanel();`
- `myPanel.add(button1);`
- Layout manager objects are used to control the placement of components

## The Java Event Model
- User interactions with GUI components create events
- Event listeners connect events to event handler
- Event generator tells a listener of an event by sending a message
- Event generator and listener are connected by event listener registration
- Interface is used to make event handling methods conform to a standard protocol
- Class that implements a listener must implement an interface for the listener
- [EX of event class] `ItemEvent`
- About event of clicking a checkbox, a radio button, or a list item
- [Interface] `ItemListener` prescribes a method, `itemStateChanged`
- A handler for `ItemEvent` events
- Should be implemented
- Register listener
- `button1.addItemListener(this);`
- Each event handler can receives parameters
- [EX] `isSelected`

## The Java EX

```java
package radiob;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class RadioB extends JPanel implements ItemListener {
private JTextField text;
private Font plainFont, boldFont, italicFont, boldItalicFont;
private JRadioButton plain, bold, italic, boldItalic;
private ButtonGroup radioButtons;
...
// Define required widget
public RadioB() {
text = new JTextField("In what font style should I appear?", 25);
text.setFont(plainFont);
…
plain = new JRadioButton("Plain", true);
bold = new JRadioButton("Bold");
…
radioButtons.add(plain);
radioButtons.add(bold);
…
JPanel radioPanel = new JPanel();
// Put widgets together
radioPanel.add(text);
radioPanel.add(plain);
radioPanel.add(bold);
...
// Register the event handlers
plain.addItemListener(this);
bold.addItemListener(this);
...
// Create the fonts
plainFont = new Font("Serif", Font.PLAIN, 16);
boldFont = new Font("Serif", Font.BOLD, 16);
...
} // End of the constructor
// The event handler
public void itemStateChanged (ItemEvent e) {
// Determine which button is on and set the font
// accordingly
if (plain.isSelected())
text.setFont(plainFont);
else if (bold.isSelected())
text.setFont(boldFont);
else if (italic.isSelected())
text.setFont(italicFont);
else if (boldItalic.isSelected())
text.setFont(boldItalicFont);
} // End of itemStateChanged
// The main method
public static void main(String[] args) {
// Create the window frame
JFrame myFrame = new JFrame(" Radio button example");
// Create the content pane and set it to the frame
JComponent myContentPane = new RadioB();
myContentPane.setOpaque(true);
myFrame.setContentPane(myContentPane);
// Display the window.
myFrame.pack();
myFrame.setVisible(true);
}
} // End of RadioB

```

## Event Handling in C#
- Similar to Java
- .NET has two approaches: Windows Forms, Windows Presentation Foundation
- In Windows Forms, GUI can be constructed by `System.Windows.Forms`
- Implicitly provides a window - No need to build frame or panel explicitly
- Label objects: place text in the window
- `RadioButton` class: define radio button objects
- Components are positioned by assigning a new `Point` object to the `Location` property of the component (`System.Drawing`)

```csharp
private RadioButton plain = new RadioButton();
plain.Location = new Point(100, 300);
plain.Text = ″Plain″;
controls.Add(plain);

```
- All C# event handlers have the same protocol, the return type is void and the two parameters are of types `object` and `EventArgs`
- An event handler can have any name
- A radio button is tested with the Boolean `Checked` property of the button

```csharp
private void rb_CheckedChanged (object o, EventArgs e) {
if (plain.Checked) …
...
}

```
- To register an event, a new `EventHandler` object must be created and added to the predefined delegate for the event
- If the handler was named `rb_CheckedChanged`, register it on the radio button named plain with: `plain.CheckedChanged += new EventHandler (rb_CheckedChanged);`
- When a radio button changes from unchecked to checked, `CheckedChanged` event is raised
- The associated delegate is referenced by the name of the event

## The C# EX

```csharp
namespace RadioB {
using System;
using System.Drawing;
using System.Windows.Forms;
public class RadioB : Form {
private Label text = new Label();
private RadioButton plain = new RadioButton();
private RadioButton bold = new RadioButton();
…
// Define required widget
public RadioB() {
// Initialize the attributes of the text and radio buttons
text.AutoSize = true;
text.Text = "In what font style should I appear?";
plain.Location = new Point(220,0);
plain.Text = "Plain";
plain.Checked = true;
…
…
Controls.Add(text);
Controls.Add(plain);
// Put widgets together
...
// Register the event handler for the radio buttons
plain.CheckedChanged +=
new EventHandler(rb_CheckedChanged);
bold.CheckedChanged +=
new EventHandler(rb_CheckedChanged)
...
} // End of the constructor
// The main method is where execution begins
static void Main() {
Application.EnableVisualStyles();
Application.SetCompatibleTextRenderingDefault(false);
Application.Run(new RadioB());
}
// The event handler
private void rb_CheckedChanged ( object o, EventArgs e) {
// Determine which button is on and set the font
// accordingly
if (plain.Checked)
text.Font =
new Font( text.Font.Name, text.Font.Size, FontStyle.Regular);
…

```

## Event Handling in Python
- `tkinter` is a module required when developing a graphical user interface (GUI) in Python.

```python
from tkinter import *
def callback():
button["text"] ="버튼이 클릭되었음!"
window = Tk()
button = Button(window, text="클릭", command=callback)
button.pack(side=LEFT)
window.mainloop()

```
- Widgets in `tkinter`
- Button
- Canvas
- Checkbutton
- Entry
- Frame
- Label
- Listbox
- Menu
- Menubutton
- Message
- Radiobutton
- Scale
- Scrollbar
- Text
- Toplevel
- LabelFrame
- PanedWindow
- Calculator

```python
from tkinter import *
def click(key):
if key == '=':
# If it is the “=” button,
try:
#the formula is calculated and the result is displayed
result = eval(entry.get())
entry.delete(0, END)
entry.insert(END, str(result))
except:
entry.insert(END, "오류!")
elif key == 'C':
entry.delete(0, END)
else:
entry.insert(END, key)
window = Tk()
window.title("간단한 계산기")
buttons = [
'7', '8', '9', '+', 'C',
'4', '5', '6', '-', ' ',
'1', '2', '3', '*', ' ',
'0', '.', '=', '/', ' ' ]
# # Create a button using a loop
i=0
for b in buttons:
cmd = lambda x=b: click(x)
b = Button(window,text=b,width=5,relief='ridge',command=cmd)
b.grid(row=i//5+1,column=i%5)
i += 1
# The entry widget is placed across five cells in the top row
entry = Entry(window, width=33, bg="yellow")
entry.grid(row=0, column=0, columnspan=5)
window.mainloop()

```
- Event handler binding

```python
from tkinter import *
def sleft(event):
print("단일 클릭, 왼쪽 버튼")
def dleft(event):
print("더블 클릭, 왼쪽 버튼")
widget = Button(None, text='마우스 클릭')
widget.pack()
widget.bind('<Button-1>', sleft)
widget.bind('<Double-1>', dleft)
widget.mainloop()

```
- `<Button-1>`
- `<B1-Motion>`
- `<ButtonRelease-1>`
- `<Double-Button-1>`
- `<Enter>`
- `<Leave>`
- `<FocusIn>`
단일 클릭, 왼쪽 버튼
더블 클릭, 왼쪽 버튼
- `<FocusOut>`
- `<Return>`
- `<Key>`
- `<Shift-Up>`
- `<Configure>`

## Summary
- Ada provides extensive exception-handling facilities with a comprehensive set of built-in exceptions
- C++ includes no predefined exceptions
- Exceptions are bound to handlers by connecting the type of expression in the `throw` statement to that of the formal parameter of the `catch` function
- Java exceptions are similar to C++ exceptions except that a Java exception must be a descendant of the `Throwable` class. Additionally Java includes a `finally` clause
- An event is a notification that something has occurred that requires handling by an event handler
- Java event handling is defined on the Swing components
- C# event handling is the .NET model, which is similar to the Java model