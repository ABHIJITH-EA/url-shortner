import hashlib

from sqlalchemy.orm import Session

from database.models import ShortUrl


async def url_shortner(url: str, db: Session) -> str:
    url_hash = hashlib.md5(url.encode())
    short_url = url_hash.hexdigest()[:6]

    try:
        db_record = ShortUrl(original_url = url, short_url = short_url)
        db.add(db_record)
        db.commit()
    except Exception as e:
        raise Exception('Handle SQL based exceptions')

    return short_url