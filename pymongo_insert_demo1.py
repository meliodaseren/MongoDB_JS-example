# http://api.mongodb.com/python/current/tutorial.html
# https://docs.mongodb.com/manual/tutorial/query-documents/

import pymongo
from pymongo import MongoClient

client = MongoClient()
client = MongoClient('localhost', 27017)

# Create database
db = client.test_database

# Create collection
db.inventory.insert_many([
    {"item": "journal",
     "qty": 25,
     "size": {"h": 14, "w": 21, "uom": "cm"},
     "status": "A"},
    {"item": "notebook",
     "qty": 50,
     "size": {"h": 8.5, "w": 11, "uom": "in"},
     "status": "A"},
    {"item": "paper",
     "qty": 100,
     "size": {"h": 8.5, "w": 11, "uom": "in"},
     "status": "D"},
    {"item": "planner",
     "qty": 75, "size": {"h": 22.85, "w": 30, "uom": "cm"},
     "status": "D"},
    {"item": "postcard",
     "qty": 45,
     "size": {"h": 10, "w": 15.25, "uom": "cm"},
     "status": "A"}
    ]
)

