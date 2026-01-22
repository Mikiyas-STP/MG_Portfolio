import { useState, useEffect } from 'react';
import type { GitHubProfile } from '../types';
export const useGitHubProfile = (username: string) => {
  // 1. State for the data
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  
  // 2. State for the UI (Loading spinner)
  const [loading, setLoading] = useState<boolean>(true);
  
  // 3. State for errors (404, Network fail)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log('GitHub API Status:', response.status);
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub profile');
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setProfile(null);
      } finally {
        // This runs whether it succeeds OR fails.
        // We always turn off the loading spinner.
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]); // Re-run this logic if the username changes

  return { profile, loading, error };
};