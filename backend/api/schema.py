from pydantic import BaseModel, HttpUrl

class ShortUrlRequest(BaseModel):
    url: HttpUrl

class ShortUrlResponse(BaseModel):
    short_url: str