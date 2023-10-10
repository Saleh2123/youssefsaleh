{
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/x86_64-linux";

    flake-parts.inputs.nixpkgs-lib.follows = "nixpkgs";
  };
  outputs = inputs: inputs.flake-parts.lib.mkFlake { inherit inputs; } {
    systems = import inputs.systems;

    perSystem = { pkgs, system, ... }: {
      _module.args.pkgs = import "${inputs.nixpkgs}/pkgs/top-level" {
        localSystem = system;
      };
      devShells.default = pkgs.mkShell.override { stdenv = pkgs.stdenvNoCC; } {
        packages = [
          pkgs.bun
          pkgs.nodejs_latest
          pkgs.openssl
          pkgs.prettierd
          pkgs.shellcheck
          pkgs.shfmt
        ];
        shellHook = ''
          export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
          export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
        '';
      };
    };
  };
}
