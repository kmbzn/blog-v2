# Project 03
## Virtual Memory & File system

**Due date:** 2025. 06. 10. (Tue) 24:00  
**Operating System**

## Overview

* **Copy-on-Write Fork**
    * Memory management optimization through lazy allocation
* **Large Files**
    * File system extension with doubly-indirect blocks
* **Symbolic Links**
    * Advanced file referencing and path resolution

# Copy-on-Write Fork

## Overview

* **Problem: Inefficient memory copying in fork()**
    * Current fork() copies all parent memory immediately
        * Inefficient and time-consuming
        * Can fail due to insufficient memory
* **Solution: Copy-on-Write (COW)**
    * Share pages between parent and child initially
    * Copy pages only when modified

## COW Fork Architecture

* **Initial State:**
    * Child page table points to parent's physical pages
    * Parent's PTEs marked read-only to trap write access
    * COW bit set using RSW (Reserved for Software) bits
* **Write Access:**
    * **Page fault** triggered on write attempt
    * Kernel allocates new physical page
    * Original page copied to new page
    * PTE updated with write permission
* **Reference Counting:**
    * Track number of processes sharing each page
    * Free pages only when reference count reaches zero

## Implementation Tasks

* **Core Functions to Modify:**
    * `uvmcopy()`: Share pages instead of copying
    * `usertrap()`: Handle COW page faults
    * `kfreevm()`: Apply COW logic to kernel operations
    * `fork()` / `wait()` / `exit()`: Implement reference counting
* **Key Challenges:**
    * Distinguishing COW faults from other page faults
    * Properly managing page reference counters
    * Handling out-of-memory conditions
    * Maintaining compatibility with existing code

## Cow Test Result

* **simplest()**: Basic COW Memory Allocation and Behavior Verification
* **threetest()**: Multi-Process COW Stress Testing
* **filetest()**: System Call Integration with COW (copyout() Compatibility)

```
...
simple: ok
threetest: ok
filetest: ok
...
ALL COW TESTS PASSED
```

# Large Files

## Overview

* **Problem: Limited file size in xv6**
    * Current limit: 268 blocks (268 KB)
        * 12 direct + 1 single-indirect
    * Insufficient for modern applications
* **Solution: Doubly-Indirect Blocks**
    * Support up to 12 + 256 + 256*256 blocks (~66 MB)
    * Structure: 11 direct + 1 single-indirect + 1 double-indirect
    * Maintain backward compatibility

## Current Block Addressing Hierarchy


## Block Addressing Hierarchy


## Implementation Tasks

* **Constants and Structures:**
    * Change FSSIZE from 2000 to 262656
    * Modify NINODE and NFILE
    * Update on-disk structures
    * Modify inode's `addrs` array and inode structures
* **Core Functions:**
    * `bmap()`: Implement doubly-indirect address translation
    * `itrunc()`: Free all direct and indirect blocks
    * `create()`: Support new file/structure creation

## Largefile Test Result

* Large File Creation and Sequential Writing
* File Size Validation
* Data Integrity Verification

# Symbolic Links

## Overview

* **Problem: Rigid file referencing in xv6**
    * Only hard links available (inode-based)
    * Cannot link directories or span file systems
    * No support for broken or flexible links
* **Solution: Symbolic Links**
    * Store target path as data in a file
    * Can point to non-existent files
    * Enable more flexible linking and references
    * Enhanced for system flexibility

## Symbolic Links Architecture

* **File Type Extension:**
    * Add `T_SYMLINK` file type
* **Target path stored** in the inode's data blocks
* **New system call:** `symlink(target, path)`
* **System Call Interface:**
    * `sys_symlink()`: (Step 1) Create symlink file
* **Modified `open()`**: (Step 2) Follow symbolic links directly
    * Handle relative/absolute paths, link loops
* **Path Resolution:**
    * Recursive resolution for nested links
    * Cycle detection to prevent infinite loops
    * Proper error handling for broken links

# Implementation Tasks

* **New Components:**
    * `T_SYMLINK` file type in `kernel/fs.h`
    * `sys_symlink()` system call implementation
    * `symlink(2)` user-level syscall wrapper
* **Modified Functions:**
    * `open()`: Implement path resolution logic
    * `create()`: Support symbolic link creation

# Symlink Test Result

* **`testsymlink()` - Core Functionality Testing**
    * Symbolic Link Creation and Access
    * Relative Path Handling
    * Circular Reference Detection
    * Broken Symbolic Link Testing
    * Chain Link Resolution
* **`concur()` - Concurrent Testing**

```
...
Start: test symlinks
test symlinks: OK
Start: test concurrent symlinks
test concurrent symlinks: OK
...
```

# Evaluation

* **Completeness** The xv6 operating system must function correctly according to the specification requirements.
* **Wiki & Commit History** Grading will be based on the wiki documentation, so the wiki should be written in as much detail as possible.
* **Deadline** The submission deadline must be strictly observed. After the deadline, you will get 0 points, and scores will be revised.
* **DO NOT PLAGIARIZE ANY COPY!!!**

# Wiki

* **Design** Outline your implementation approach for meeting the project requirements.
* **Implementation** Explain key code modifications and their purpose, focusing on changes from the original xv6.
* **Results** Show evidence of successful implementation with:
    * Completion Process, Screenshots of working code, Explanation of program flow
* **Troubleshooting** Describe any problems encountered, solutions applied, and any unresolved issues.
* Additional content may be included if relevant.

# Submission

* Submit your implemented code and wiki through **GitHub**.
    * **Make the submission branch and submit your repository.**
    * The name of the repository is 'os\_project03\_[studentID]'.
* The wiki file should be named '**os\_project03\_[class number]\_[student ID].pdf**'.
* Submission deadline: **June 19, 2025, 23:59**
    * Late submissions (submitted after the deadline on June 19, 2025, 23:59) but will only receive 50% of the possible score.

# Q&A

* For questions related to the project, please use the question board 'Project 03 Question Board' on the LMS.
* Questions sent by email **will not be answered**.
* For questions not related to the project, please use the Q&A board or send an email.