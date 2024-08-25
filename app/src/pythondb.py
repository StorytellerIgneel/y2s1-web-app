import mysql.connector
from mysql.connector import Error

try:
    # Establish the connection
    connection = mysql.connector.connect(
        host='localhost',         # Replace with your host
        database='wad_assignment', # Replace with your database name
        user='root',     # Replace with your username
        password='teoH0628$$$$'  # Replace with your password
    )

    if connection.is_connected():
        db_info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)

        # Example: Execute a query
        #cursor.execute("INSERT into emails VALUES('GAY', 'teohwh2004@gmail.com', 'ur gay')")  # Replace with your table name
        cursor.execute("SELECT * from emails")
        rows = cursor.fetchall()

        for row in rows:
            print(row)

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if connection.is_connected():
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
