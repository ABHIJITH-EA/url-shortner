from pydantic import BaseModel

class ShortUrlRequest(BaseModel):
    url: str

class ShortUrlResponse(BaseModel):
    short_url: str