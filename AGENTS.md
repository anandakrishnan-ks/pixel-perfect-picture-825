<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Type roles are fixed: `.display` (Anton) only for giant display headlines and the outlined wordmark; `.lead` / `.subhead` / `.pull` (the serif in `src/styles.css`) for lead copy, sub-headings and quotes; `.meta` (mono) for small tracked labels. Add a new utility instead of dropping ad-hoc font classes into components — the font family is chosen in one place so it can be swapped without touching pages.
