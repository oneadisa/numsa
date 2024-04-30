export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
}

export function formatNumsaPosts(posts, { sortByRank = true, limit = undefined } = {}) {
  // sortByRank or randomize
  if (sortByRank) {
    posts.sort((a, b) => a.data.serial - b.data.serial);
  } else {
    posts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === 'number') {
    return posts.slice(0, limit);
  }
  return posts;
}

export function formatCampaignPosts(posts, { sortByRank = true, limit = undefined } = {}) {
  // sortByRank or randomize
  if (sortByRank) {
    posts.sort((a, b) => b.data.serial - a.data.serial);
  } else {
    posts.sort(() => Math.random() - 0.5);
  }

  // limit if number is passed
  if (typeof limit === 'number') {
    return posts.slice(0, limit);
  }
  return posts;
}
