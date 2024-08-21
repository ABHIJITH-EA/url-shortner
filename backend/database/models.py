from sqlalchemy import Column, Integer, String, UniqueConstraint
from .database import Base

class ShortUrl(Base):
    __tablename__ = 'short_url'

    id = Column(Integer, primary_key=True)
    original_url = Column(String, unique=True, index=True)
    short_url = Column(String, index=True)

    __table_args__ = (UniqueConstraint("original_url", name="unique_original_url"),)