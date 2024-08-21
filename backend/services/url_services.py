import hashlib

from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from pydantic import HttpUrl

from database.models import ShortUrl
from utils.exceptions import DatabaseException


async def url_shortner(url: HttpUrl, db: Session) -> str:
    """
        Shortens a given URL by creating a 6-character hash and storing it in the database.
        
        Args:
        - url: HttpUrl (the original URL to be shortened)
        - db: Session (SQLAlchemy session to interact with the database)
        
        Returns:
        - short_url: The shortened URL string.
        
        Raises:
        - DatabaseException: If an error occurs while interacting with the database.    
    """
    try:
        existing_url = db.query(ShortUrl).filter(ShortUrl.original_url == url.unicode_string()).first()
    except SQLAlchemyError as e:
        raise DatabaseException(detail=repr(e))
    
    if existing_url:
        return existing_url.short_url

    url_hash = hashlib.md5(url.unicode_string().encode())
    short_url = url_hash.hexdigest()[:6]

    try:
        db_record = ShortUrl(original_url = url.unicode_string(), short_url = short_url)
        db.add(db_record)
        db.commit()
    except SQLAlchemyError as e:
        raise DatabaseException(detail=repr(e))

    return short_url


async def fetch_short_url(url_id: str, db: Session) -> ShortUrl:
    """
        Lookup and fetch the database for shortend url.

        Args:
            - url_id: Shortened url id
            - db: Session (SQLAlchemy session to interact with the database)

        Returns:
            - short_url: ShortUrl model

        Raises:
            - DatabaseException: If an error occurs while interacting with the database.   
    """
    try:
        short_url = db.query(ShortUrl).filter(ShortUrl.short_url == url_id).first()
    except SQLAlchemyError as e:
        raise DatabaseException(detail=repr(e))
    
    return short_url