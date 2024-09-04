import mysql.connector
from mysql.connector import Error

def check_game_exists(cursor, title):
    """Check if a game with the given title exists in the database."""
    query = "SELECT COUNT(*) FROM games WHERE title = %s"
    cursor.execute(query, (title,))
    result = cursor.fetchone()
    return result[0] > 0

def insert_game(game_list):
    try:
        # Establish the connection
        connection = mysql.connector.connect(
            host='localhost',         # Replace with your host
            database='wad_assignment', # Replace with your database name
            user='root',     # Replace with your username
            password=''  # Replace with your password
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
            for game in game_list:
                if (check_game_exists(cursor, game.title)):
                    insert_query = "INSERT INTO games (title, img_src, `desc`, rating, rating_num, release_date, developer, publisher, price) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);"
                    cursor.execute(insert_query, (game.title, game.img_src, game.desc, game.rating, game.rating_num, game.release_date, game.developer, game.publisher, game.price))
                    connection.commit()  # Commit each insertion to the database

    except Error as e:
        print("Error while connecting to MySQL", e)

    cursor.close()
    connection.close()
    print("MySQL connection is closed")
