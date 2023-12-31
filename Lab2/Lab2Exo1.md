## Get started with Git ##

1- Create a folder called earn_git
``` mkdir earn_git ```

2- Navigate to the earn_git folder.
``` cd earn_git```

3- Create a file called three.txt.
``` touch three.txt```

4- Initialize an empty Git repository:
``` git init```

5- Add the three.txt file to the staging area:
``` git add three.txt```

6- Commit the three.txt file with the message "three.txt added":
``` git commit -m "three.txt added```

7- Check the commit history using the git log command:
``` git log```

You should see the following output:
```commit 1234567890abcdef...
Author: [Your name] <[Your email]>
Date:   Sun Oct 22 11:54:29 2023 +0000

    three.txt added

```
8- Create another file called four.txt.
``` git add three.txt```

9- Add the four.txt file to the staging area:
``` git add four.txt```

10- Commit the four.txt file with the message "added four.txt":
``` git commit -m "added four.txt```

11- Delete the three.txt file:
``` rm three.txt```

12- Add the deletion of three.txt to the staging area:
``` git add ```

13- Commit the deletion of three.txt with the message "delete three.txt":
``` git commit -m "delete three.txt" ```

14- Check the commit history again:
``` git log```

You should now see the following output:
``` commit 1234567890abcdef...
Author: [Your name] <[Your email]>
Date:   Sun Oct 22 11:54:29 2023 +0000

    delete three.txt

commit 9876543210fedcba...
Author: [Your name] <[Your email]>
Date:   Sun Oct 22 11:54:29 2023 +0000

    added four.txt

commit 1234567890abcdef...
Author: [Your name] <[Your email]>
Date:   Sun Oct 22 11:54:29 2023 +0000

    three.txt added
```
