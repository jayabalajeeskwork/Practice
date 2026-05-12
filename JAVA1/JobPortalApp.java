import java.util.ArrayList;
import java.util.Scanner;

// Job class
class Job {
    int id;
    String title;
    String company;
    String location;

    // Constructor
    Job(int id, String title, String company, String location) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
    }

    // Method to display job details
    void displayJob() {
        System.out.println("\nJob ID      : " + id);
        System.out.println("Job Title   : " + title);
        System.out.println("Company     : " + company);
        System.out.println("Location    : " + location);
    }
}

// Main class
public class JobPortalApp {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // ArrayList to store jobs
        ArrayList<Job> jobs = new ArrayList<>();

        int choice;

        // Loop
        while (true) {

            System.out.println("\n========== JOB PORTAL ==========");
            System.out.println("1. Add Job");
            System.out.println("2. View All Jobs");
            System.out.println("3. Search Job by ID");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");

            choice = sc.nextInt();
            sc.nextLine();

            // IF condition
            if (choice == 1) {

                // Add Job
                System.out.print("Enter Job ID: ");
                int id = sc.nextInt();
                sc.nextLine();

                System.out.print("Enter Job Title: ");
                String title = sc.nextLine();

                System.out.print("Enter Company Name: ");
                String company = sc.nextLine();

                System.out.print("Enter Location: ");
                String location = sc.nextLine();

                // Create object
                Job job = new Job(id, title, company, location);

                jobs.add(job);

                System.out.println("Job Added Successfully!");

            } else if (choice == 2) {

                // View Jobs
                if (jobs.size() == 0) {
                    System.out.println("No Jobs Available!");
                } else {

                    System.out.println("\n===== JOB LIST =====");

                    // FOR loop
                    for (int i = 0; i < jobs.size(); i++) {
                        jobs.get(i).displayJob();
                    }
                }

            } else if (choice == 3) {

                // Search Job
                System.out.print("Enter Job ID to Search: ");
                int searchId = sc.nextInt();

                boolean found = false;

                // FOR loop
                for (int i = 0; i < jobs.size(); i++) {

                    if (jobs.get(i).id == searchId) {

                        System.out.println("\nJob Found!");
                        jobs.get(i).displayJob();

                        found = true;
                        break;
                    }
                }

                // IF condition
                if (!found) {
                    System.out.println("Job Not Found!");
                }

            } else if (choice == 4) {

                System.out.println("Thank You for Using Job Portal!");
                break;

            } else {

                System.out.println("Invalid Choice!");
            }
        }

        sc.close();
    }
}