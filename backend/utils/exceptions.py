from fastapi import HTTPException

class DatabaseException(HTTPException):
    def __init__(self, detail: str = "Database error occurred"):
        super().__init__(status_code=500, detail=detail)