import Storage from '../../storage';

const storage = new Storage('links');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json();
    return;
  }
  const { link } = req.body;
  if (!link || typeof link !== 'string') {
    res.status(422).json();
    return;
  }
  const count = await storage.getCount();
  const key = String(count);
  const value = {
    link,
  };
  storage.setItem(key, value);
  res.status(201).json(value);
}
