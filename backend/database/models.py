from sqlalchemy import Column, Integer, String
from .database import Base

class ShortUrl(Base):
    __tablename__ = 'short_url'

    id = Column(Integer, primary_key=True)
    original_url = Column(String)
    short_url = Column(String)