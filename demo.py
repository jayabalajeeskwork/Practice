import mysql.connector


def create_DB():
    con = mysql.connector.connect(host="localhost",user="root",passwd="tharunsk4")
    try:
        if con.is_connected():
            cur = con.cursor()
            cur.execute("CREATE DATABASE cherrytom")
            cur.execute("USE cherrytom")
        print("cherrytom database created successfully")
        con.close()
    except:
        print("database name already exists")
        con.close()


def create_table():
    try:
        con = mysql.connector.connect(host="localhost",user="root",passwd="tharunsk4",database="cherrytom")

        if con.is_connected():
            wr = con.cursor()
            wr.execute("CREATE TABLE EMPLOYEES (ENO INT PRIMARY KEY,ENAME VARCHAR(20),GENDER VARCHAR(3),SALARY INT)")

            print("employee table created successfully")
        con.close()

    except:
        print("table name already exists")
        con.close()


while True:
    print("\nInterfacing Python with MySQL")
    print("1. To create database")
    print("2. To create table")
    print("3. Exit")

    ch = int(input("Enter your choice (1-3): "))

    if ch == 2:
        create_table()


    elif ch == 1:
        create_DB()

    else:
        break